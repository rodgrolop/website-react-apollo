import React, { Component } from 'react'

// Context
import AppContextProvider from '../../appContext'

// Apollo modules
import { ApolloProvider } from 'react-apollo'
import { ApolloConsumer } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { getMainDefinition } from 'apollo-utilities'
import { ApolloLink, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Apollo constants
// import { paths, history } from '../../constants'

// Theme modules and config
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../../config'

// Components
import PageContainerComponent from '../pageContainer'

// Assets
import '../../assets/App.css'

const httpLink = new HttpLink({
  uri: 'http://localhost:3006/graphql'
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3006/graphql`,
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
      console.log('GraphQL error', message)

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

class RootComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isAuth: false,
  //     user: {}
  //   }
  // }

  render() {
    return (
      <AppContextProvider>
        <ApolloProvider client={client}>
          <MuiThemeProvider theme={theme}>
            <PageContainerComponent />
            {/* <ApolloConsumer>
              {client => (
                <button type="button" onClick={() => signOut(client)}>
                  Sign Out
                </button>
              )}
            </ApolloConsumer> */}
          </MuiThemeProvider>
        </ApolloProvider>
      </AppContextProvider>
    )
  }
}

export default RootComponent
