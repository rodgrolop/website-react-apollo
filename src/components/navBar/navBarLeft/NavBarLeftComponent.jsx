import React, { useState } from 'react'

import MenuButtonComponent from './menuButton'
import NavDrawerComponent from '../../navDrawer'

const NavBarLeftComponent = () => {
  const [isDrawerOpen, toggleDrawerState] = useState(false)

  const toggleDrawer = () => {
    toggleDrawerState(!isDrawerOpen)
  }
  return (
    <React.Fragment>
      <MenuButtonComponent toggleDrawer={toggleDrawer} />
      <NavDrawerComponent
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </React.Fragment>
  )
}

export default NavBarLeftComponent
