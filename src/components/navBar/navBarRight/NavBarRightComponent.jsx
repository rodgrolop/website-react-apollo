import React, { useState } from 'react'

import IsAuthAccountButtonsComponent from './isAuthAccountButtons'
import NoIsAuthAccountButtonsComponent from './noIsAuthAccountButtons'

const NavBarRightComponent = props => {
  const [isSignDialogOpen, toggleDialogState] = useState(false)

  const toggleSignDialog = () => {
    toggleDialogState(!isSignDialogOpen)
  }
  return props.appContext.isAuth ? (
    <IsAuthAccountButtonsComponent toggleSignDialog={toggleSignDialog} />
  ) : (
    <NoIsAuthAccountButtonsComponent toggleSignDialog={toggleSignDialog} />
  )
}

export default NavBarRightComponent
