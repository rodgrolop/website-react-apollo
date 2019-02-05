import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const NoIsAuthAccountButtonsComponent = props => {
  const [anchorEl, setDesktopMenuState] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const toggleProfileMenu = event => {
    setDesktopMenuState(isMenuOpen ? null : event.currentTarget)
  }
  return (
    <React.Fragment>
      <IconButton
        aria-haspopup='true'
        onClick={toggleProfileMenu}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={toggleProfileMenu}
      >
        <MenuItem onClick={props.toggleSignDialog}>Sign In</MenuItem>
        <MenuItem onClick={toggleProfileMenu}>Sign Up</MenuItem>
      </Menu>
    </React.Fragment>
  )
}
export default NoIsAuthAccountButtonsComponent
