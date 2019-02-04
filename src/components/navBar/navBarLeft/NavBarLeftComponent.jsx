import React, { useState } from 'react'

import MenuButtonComponent from './menuButton'
import NavDrawerComponent from '../../navDrawer'

const NavBarLeftComponent = () => {
  const [isNavDrawerOpen, toggleNavDrawerState] = useState(false)

  const toggleNavDrawer = () => {
    toggleNavDrawerState(!isNavDrawerOpen)
  }

  return (
    <React.Fragment>
      <MenuButtonComponent toggleNavDrawer={toggleNavDrawer} />
      <NavDrawerComponent
        isNavDrawerOpen={isNavDrawerOpen}
        toggleNavDrawer={toggleNavDrawer}
      />
    </React.Fragment>
  )
}

export default NavBarLeftComponent
