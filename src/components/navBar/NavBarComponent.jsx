import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import NavBarRightComponent from './navBarRight'
import NavBarLeftComponent from './navBarLeft'

class NavBarComponent extends Component {
  render() {
    const { classes } = this.props
    console.log('hola')
    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <NavBarLeftComponent />
            <div className={classes.grow} />
            <NavBarRightComponent />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBarComponent
