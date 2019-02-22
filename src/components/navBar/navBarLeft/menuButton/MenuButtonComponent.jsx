import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButtonComponent = ({ toggleDrawer }) => {
  return (
    <IconButton color="inherit" onClick={toggleDrawer}>
      <MenuIcon />
    </IconButton>
  )
}

export default React.memo(MenuButtonComponent)
