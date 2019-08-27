import React, { useContext, Suspense, lazy } from 'react'
import { UserContext } from '../../../context'

import CircularProgress from '@material-ui/core/CircularProgress'

const NavBarRightAuthButtonsComponent = lazy(() =>
  import('./navBarRightAuthButtons')
)
const NavBarRightButtonsComponent = lazy(() => import('./navBarRightButtons'))

const NavBarRightComponent = () => {
  const userContext = useContext(UserContext)
  const { isAuth } = userContext.state

  return isAuth ? (
    <Suspense fallback={<CircularProgress size={24} color='secondary' />}>
      <NavBarRightAuthButtonsComponent />
    </Suspense>
  ) : (
    <Suspense fallback={<CircularProgress size={24} color='secondary' />}>
      <NavBarRightButtonsComponent />
    </Suspense>
  )
}
export default NavBarRightComponent
