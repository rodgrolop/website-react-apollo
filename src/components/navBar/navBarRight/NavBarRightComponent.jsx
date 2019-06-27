import React, { useContext } from 'react'
import { UserContext } from '../../../context'

import NavBarRightAuthButtonsComponent from './navBarRightAuthButtons'
import NavBarRightButtonsComponent from './navBarRightButtons'

const NavBarRightComponent = () => {
  const userContext = useContext(UserContext)
  const userState = userContext.state

  return userState.isAuth ? (
    <NavBarRightAuthButtonsComponent />
  ) : (
    <NavBarRightButtonsComponent />
  )
}
export default NavBarRightComponent
