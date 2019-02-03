import React, { PureComponent } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class MenuButtonComponent extends PureComponent {
  render() {
    console.log('hola')
    return (
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={this.props.toggleNavDrawer}
      >
        <MenuIcon />
      </IconButton>
    )
  }
}

export default MenuButtonComponent
