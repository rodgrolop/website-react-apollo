import React from 'react'

// Normalize library from MUI
import CssBaseline from '@material-ui/core/CssBaseline'

// Context
import {
  AppContextProvider,
  UserContextProvider,
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
    <UserContextProvider>
      <DialogsContextProvider>
        <SideBarContextProvider>
          <ThemeProviderComponent>
            <ApolloProviderComponent>
              <RootRouter>
                <CssBaseline />
                <PageContainerComponent />
              </RootRouter>
            </ApolloProviderComponent>
          </ThemeProviderComponent>
        </SideBarContextProvider>
      </DialogsContextProvider>
    </UserContextProvider>
  </AppContextProvider>
)

export default RootComponent
