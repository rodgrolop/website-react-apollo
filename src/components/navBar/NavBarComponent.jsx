import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import NavBarRightComponent from './navBarRight'
import NavBarLeftComponent from './navBarLeft'

import { ReactComponent as Logo } from '../../assets/svg/Caffeine_logo.svg'

const NavBarComponent = ({ classes }) => {
  return (
    <AppBar variant='regular' className={classes.solid}>
      <Toolbar>
        <NavBarLeftComponent />
        <Logo className={classes.logo} />
        <div className={classes.grow} />
        <NavBarRightComponent />
      </Toolbar>
    </AppBar>
  )
}

export default NavBarComponent
