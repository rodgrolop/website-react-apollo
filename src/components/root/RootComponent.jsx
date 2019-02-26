import React from 'react'

// Context
import { AppContextProvider, LayOutContextProvider } from '../../context'

// Theme provider
import ThemeProviderComponent from '../../theme'

// Apollo Provider
import ApolloProviderComponent from '../../apollo'

// Components
import PageContainerComponent from '../pageContainer'

// Assets
import '../../assets/App.css'

const RootComponent = () => {
  return (
    <AppContextProvider>
      <ThemeProviderComponent>
        <ApolloProviderComponent>
          <PageContainerComponent
          // appContext={appContext}
          />
          {/* <ApolloConsumer>
              {client => (
                <button type="button" onClick={() => signOut(client)}>
                  Sign Out
                </button>
              )}
            </ApolloConsumer> */}
        </ApolloProviderComponent>
      </ThemeProviderComponent>
    </AppContextProvider>
  )
}

export default RootComponent
