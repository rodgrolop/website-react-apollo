import React from 'react'

// Context
import {
  AppContextProvider,
  SideBarContextProvider,
  DialogsContextProvider
} from '../../context'

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
    <DialogsContextProvider>
      <SideBarContextProvider>
        <ThemeProviderComponent>
          <ApolloProviderComponent>
            <RootRouter>
              <PageContainerComponent />
            </RootRouter>
          </ApolloProviderComponent>
        </ThemeProviderComponent>
      </SideBarContextProvider>
    </DialogsContextProvider>
  </AppContextProvider>
)

export default RootComponent
