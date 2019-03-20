import React, { useState } from 'react'

// Temp Components
import { Link } from 'react-router-dom'

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
        <Link to='/'>
          <strong>Home</strong>
        </Link>
        <Link to='/authentication'>
          <strong>Auth</strong>
        </Link>
        <NavBarRightComponent />
      </Toolbar>
    </AppBar>
  )
}

export default NavBarComponent
