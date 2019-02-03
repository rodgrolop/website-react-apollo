import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Badge from '@material-ui/core/Badge'

class IsAuthAccountButtonsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          onClick={this.props.toggleSignDialog}
          color="inherit"
        >
          <AccountCircle />
          {console.log('navRight')}
        </IconButton>
      </React.Fragment>
    )
  }
}

export default IsAuthAccountButtonsComponent
