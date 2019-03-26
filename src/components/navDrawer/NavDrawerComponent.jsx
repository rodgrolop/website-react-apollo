import React, { useContext } from 'react'

import { SideBarContext } from '../../context/SideBarContextProvider'

import NavDrawerHeaderComponent from './navDrawerHeader'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const sideList = (
  <React.Fragment>
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </React.Fragment>
)
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const NavDrawerComponent = ({ classes }) => {
  const sideBarContext = useContext(SideBarContext)

  const toggleDrawer = () => {
    sideBarContext.state.isDrawerOpen
      ? sideBarContext.dispatch({ type: 'closeDrawer' })
      : sideBarContext.dispatch({ type: 'openDrawer' })
  }

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor='left'
        open={sideBarContext.state.isDrawerOpen}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <NavDrawerHeaderComponent />
        <div
          tabIndex={0}
          role='button'
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default NavDrawerComponent
