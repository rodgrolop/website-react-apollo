import React, { useContext } from 'react'

import clsx from 'clsx'

import { SideBarContext } from '../../../context/SideBarContextProvider'

import { useStyles } from './styles'

import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const NavDrawerContentComponent = () => {
  const sideBarContext = useContext(SideBarContext)
  const { isDrawerOpen, drawerPersistent, miniDrawer } = sideBarContext.state

  const classes = useStyles()

  const closeDrawer = () => {
    sideBarContext.dispatch({ type: 'closeDrawer' })
  }

  return (
    <div
      tabIndex={0}
      role='button'
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
      className={clsx(classes.navDrawerContent, {
        [classes.navDrawerContentWide]: isDrawerOpen && drawerPersistent,
        [classes.navDrawerContentMini]:
          isDrawerOpen && drawerPersistent && miniDrawer
      })}
    >
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
    </div>
  )
}

export default NavDrawerContentComponent
