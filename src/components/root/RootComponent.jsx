import React from 'react'

// Context
import { AppContextProvider, SideBarContextProvider } from '../../context'

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
      <SideBarContextProvider>
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
      </SideBarContextProvider>
    </AppContextProvider>
  )
}

export default RootComponent
