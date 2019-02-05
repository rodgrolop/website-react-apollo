import React, { useState, useContext, Suspense, lazy } from 'react'
import { AppContext } from '../../../appContext'

import CircularProgress from '@material-ui/core/CircularProgress'
import SignDialogComponent from '../../signDialog'

const IsAuthAccountButtonsComponent = lazy(() =>
  import('./isAuthAccountButtons')
)
const NoIsAuthAccountButtonsComponent = lazy(() =>
  import('./noIsAuthAccountButtons')
)
// const SignDialogComponent = lazy(() => import('../../signDialog'))

const NavBarRightComponent = () => {
  const appContext = useContext(AppContext)
  const [isSignDialogOpen, toggleSignDialogState] = useState(false)

  const toggleSignDialog = () => {
    toggleSignDialogState(!isSignDialogOpen)
  }
  return appContext.isAuth ? (
    <Suspense fallback={<CircularProgress color='secondary' size={20} />}>
      <IsAuthAccountButtonsComponent toggleSignDialog={toggleSignDialog} />
    </Suspense>
  ) : (
    <Suspense fallback={<CircularProgress color='secondary' size={20} />}>
      <NoIsAuthAccountButtonsComponent toggleSignDialog={toggleSignDialog} />
      <SignDialogComponent
        isSignDialogOpen={isSignDialogOpen}
        toggleSignDialog={toggleSignDialog}
      />
    </Suspense>
  )
}

export default NavBarRightComponent