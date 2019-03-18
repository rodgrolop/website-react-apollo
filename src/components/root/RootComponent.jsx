import React from 'react'

// Context
import { AppContextProvider, SideBarContextProvider } from '../../context'

// Theme provider
import ThemeProviderComponent from '../../theme'

// Apollo Provider
import ApolloProviderComponent from '../../apollo'

// Custom Browser Router
import { RootRouter } from '../../router'

// Components
import PageContainerComponent from '../pageContainer'

const RootComponent = () => (
  <AppContextProvider>
    <SideBarContextProvider>
      <ThemeProviderComponent>
        <ApolloProviderComponent>
          <RootRouter>
            <PageContainerComponent />
          </RootRouter>
        </ApolloProviderComponent>
      </ThemeProviderComponent>
    </SideBarContextProvider>
  </AppContextProvider>
)

export default RootComponent
