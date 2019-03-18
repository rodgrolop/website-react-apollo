import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context'

import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'

const NavBarRightComponent = ({ classes }) => {
  const { state } = useContext(AppContext)
  const [anchorEl, setDesktopMenuState] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const toggleProfileMenu = event => {
    setDesktopMenuState(isMenuOpen ? null : event.currentTarget)
  }

  return (
    <React.Fragment>
      {state.isUserAuth && (
        <React.Fragment>
          <IconButton>
            <Badge badgeContent={4} color='secondary'>
              <MailIcon className={classes.icon} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={6} color='secondary'>
              <NotificationsIcon className={classes.icon} />
            </Badge>
          </IconButton>
        </React.Fragment>
      )}
      <IconButton aria-haspopup='true' onClick={null}>
        <AccountCircle className={classes.icon} />
      </IconButton>
      {state.isUserAuth && (
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={toggleProfileMenu}
        >
          <MenuItem onClick={null}>My Account</MenuItem>
          <MenuItem onClick={toggleProfileMenu}>Log Out</MenuItem>
        </Popover>
      )}
    </React.Fragment>
  )
}

export default NavBarRightComponent
