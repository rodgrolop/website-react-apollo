import React, { useContext } from 'react'

import { SideBarContext } from '../../context/SideBarContextProvider'

import Drawer from '@material-ui/core/Drawer'
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

const NavDrawerComponent = ({ isDrawerOpen, toggleDrawer }) => {
  const { state, dispatch } = useContext(SideBarContext)

  const closeDrawer = () => {
    dispatch({ type: 'closeDrawer' })
  }

  return (
    <React.Fragment>
      <Drawer open={state.isDrawerOpen} onClose={closeDrawer}>
        <div
          tabIndex={0}
          role='button'
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          {sideList}
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default NavDrawerComponent
