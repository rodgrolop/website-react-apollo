import React, { useState } from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './client'

const ApolloProviderComponent = props => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
export default ApolloProviderComponent
