import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import NavBarRightComponent from './navBarRight'
import NavBarLeftComponent from './navBarLeft'

const NavBarComponent = ({ classes }) => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <NavBarLeftComponent />
      <div className={classes.grow} />
      <NavBarRightComponent />
    </Toolbar>
  </AppBar>
)

export default NavBarComponent
