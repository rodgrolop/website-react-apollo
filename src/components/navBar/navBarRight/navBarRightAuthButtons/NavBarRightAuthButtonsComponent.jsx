import React, { useState } from 'react'

import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'

import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'

const NavBarRightAuthButtonsComponent = ({ classes, me }) => {
  const [anchorEl, setDesktopMenuState] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const toggleProfileMenu = event => {
    setDesktopMenuState(isMenuOpen ? null : event.currentTarget)
  }
  return (
    <React.Fragment>
      <IconButton>
        {/* <Badge badgeContent={4} color='secondary'> */}
        <MailIcon className={classes.icon} />
        {/* </Badge> */}
      </IconButton>
      <IconButton>
        {/* <Badge badgeContent={6} color='secondary'> */}
        <NotificationsIcon className={classes.icon} />
        {/* </Badge> */}
      </IconButton>
      <IconButton aria-haspopup='true' onClick={toggleProfileMenu}>
        <Avatar
          alt={me.username}
          src={me.profilePicture}
          className={classes.iconAvatar}
        >
          {me.profilePicture === null && me.username.charAt(0)}
        </Avatar>
      </IconButton>
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
    </React.Fragment>
  )
}

export default NavBarRightAuthButtonsComponent
