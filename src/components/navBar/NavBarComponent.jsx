import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import NavBarRightComponent from './navBarRight'
import NavBarLeftComponent from './navBarLeft'

const NavBarComponent = props => (
  <div className={props.classes.root}>
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <NavBarLeftComponent />
        <div className={props.classes.grow} />
        <NavBarRightComponent />
      </Toolbar>
    </AppBar>
    {console.log('hola')}
  </div>
)

export default NavBarComponent
