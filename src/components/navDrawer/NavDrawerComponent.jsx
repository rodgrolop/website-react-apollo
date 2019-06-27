import React, { useContext } from 'react'

import { SideBarContext } from '../../context/SideBarContextProvider'

import NavDrawerHeaderComponent from './navDrawerHeader'
import NavDrawerContentComponent from './navDrawerContent'

import { useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const useStyles = makeStyles(styles)

const NavDrawerComponent = () => {
  const sideBarContext = useContext(SideBarContext)
  const { isDrawerOpen, drawerPersistent, miniDrawer } = sideBarContext.state

  const toggleDrawer = () => {
    isDrawerOpen
      ? sideBarContext.dispatch({ type: 'closeDrawer' })
      : sideBarContext.dispatch({ type: 'openDrawer' })
  }

  const setPersistentDrawer = () =>
    !drawerPersistent &&
    sideBarContext.dispatch({ type: 'setPersistentDrawer' })

  const setTemporaryDrawer = () =>
    drawerPersistent && sideBarContext.dispatch({ type: 'setTemporaryDrawer' })

  const setMiniDrawer = () =>
    drawerPersistent &&
    !miniDrawer &&
    sideBarContext.dispatch({ type: 'setMiniDrawer' })

  const unsetMiniDrawer = () =>
    drawerPersistent &&
    miniDrawer &&
    sideBarContext.dispatch({ type: 'unsetMiniDrawer' })

  const theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  matches ? setPersistentDrawer() : setTemporaryDrawer()

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor='left'
        variant={matches ? 'persistent' : 'temporary'}
        open={isDrawerOpen}
        onOpen={toggleDrawer}
        onClose={toggleDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <NavDrawerHeaderComponent />
        <IconButton onClick={!miniDrawer ? setMiniDrawer : unsetMiniDrawer}>
          {miniDrawer ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        <NavDrawerContentComponent />
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default NavDrawerComponent
