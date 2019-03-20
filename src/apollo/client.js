import { ApolloClient } from 'apollo-client'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloLink, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000'
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true
  }
})

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const token = localStorage.getItem('token')

    if (token) {
      headers = { ...headers, 'x-token': token }
    }

    return { headers }
  })

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(message)

      if (message === 'UNAUTHENTICATED') {
        signOut(client)
      }
    })
  }

  let netErrors = networkError

  if (networkError) {
    console.log('Network error', networkError)

    if (netErrors.statusCode === 401) {
      signOut(client)
    }
  }
})

const link = ApolloLink.from([authLink, errorLink, terminatingLink])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

const signOut = client => {
  console.log(client)
  localStorage.removeItem('token')
  client.resetStore()
  // history.push(paths.SIGN_IN)
}

export default client
