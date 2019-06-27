import React, { useContext } from 'react'

import clsx from 'clsx'

import { useStyles } from './styles'

import { SideBarContext } from '../../context/SideBarContextProvider'

const ContentFixComponent = props => {
  const { isDrawerOpen, drawerPersistent, miniDrawer } = useContext(
    SideBarContext
  ).state

  const classes = useStyles()

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: isDrawerOpen && drawerPersistent,
        [classes.contentShiftMini]:
          isDrawerOpen && drawerPersistent && miniDrawer
      })}
    >
      {props.children}
    </main>
  )
}

export default ContentFixComponent
