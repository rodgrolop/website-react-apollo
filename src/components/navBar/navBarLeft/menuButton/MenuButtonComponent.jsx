import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButtonComponent = React.memo(props => (
  <IconButton
    color="inherit"
    aria-label="Open drawer"
    onClick={props.toggleNavDrawer}
  >
    <MenuIcon />
  </IconButton>
))

export default MenuButtonComponent
