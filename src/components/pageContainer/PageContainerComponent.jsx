import React, { useContext, Suspense, lazy } from 'react'
import { AppContext, DialogContext } from '../../context'

import { Query } from 'react-apollo'
import { GET_ME } from '../../constants/queries'

// Custom Browser Switch
import { RootSwitch } from '../../router'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'

const SignDialogComponent = lazy(() => import('../signDialog'))
// const options= { fetchPolicy: 'cache-first' }

const PageContainerComponent = props => {
  const appContext = useContext(AppContext)
  const dialogContext = useContext(DialogContext)
  const { me } = appContext.state

  const saveUserData = data => {
    console.log(data)
    if (!me || me === null) {
      appContext.dispatch({ type: 'getMe', me: data.me })
    }
  }
  return (
    <Query query={GET_ME} onCompleted={data => saveUserData(data)}>
      {({ loading, error, data }) => {
        return (
          <React.Fragment>
            <NavBarComponent />
            <NavDrawerComponent />
            <RootSwitch />
            {dialogContext.state.isSignDialogOpen && (
              <Suspense fallback={null}>
                <SignDialogComponent />
              </Suspense>
            )}
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default PageContainerComponent
