import React, { useContext, Suspense, lazy } from 'react'
import { AppContext } from '../../context'

// Custom Browser Switch
import { RootSwitch } from '../../router'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'

const SignDialogComponent = lazy(() => import('../signDialog'))

const PageContainerComponent = () => {
  const appContext = useContext(AppContext)
  return (
    <React.Fragment>
      <NavBarComponent />
      <NavDrawerComponent />
      <RootSwitch />
      {appContext.state.showAuthDialog && (
        <Suspense fallback={null}>
          <SignDialogComponent />
        </Suspense>
      )}
    </React.Fragment>
  )
}

export default PageContainerComponent
