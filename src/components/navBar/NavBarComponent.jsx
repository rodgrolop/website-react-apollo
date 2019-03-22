import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import NavBarRightComponent from './navBarRight'
import NavBarLeftComponent from './navBarLeft'

const NavBarComponent = ({ classes }) => {
  const [navBarClass, setNavBarClass] = useState(classes.transparent)

  const listenScrollEvent = e => {
    if (window.scrollY > 200) {
      setNavBarClass(classes.solid)
    } else {
      setNavBarClass(classes.transparent)
    }
  }

  window.addEventListener('scroll', listenScrollEvent)

  return (
    <AppBar variant='regular' className={navBarClass}>
      <Toolbar>
        <NavBarLeftComponent />
        <div className={classes.grow} />
        <NavBarRightComponent />
      </Toolbar>
    </AppBar>
  )
}

export default NavBarComponent
