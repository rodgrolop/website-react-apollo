import React, { useContext } from 'react'

import { SideBarContext } from '../../../../context'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(styles)

const MenuButtonComponent = () => {
  const { dispatch, state } = useContext(SideBarContext)

  const classes = useStyles()

  const openDrawer = () => {
    dispatch({ type: 'openDrawer' })
  }

  const closeDrawer = () => {
    dispatch({ type: 'closeDrawer' })
  }

  return state.isDrawerOpen ? (
    <IconButton color='inherit' onClick={closeDrawer}>
      <CloseIcon className={classes.menuIcon} />
    </IconButton>
  ) : (
    <IconButton color='inherit' onClick={openDrawer}>
      <MenuIcon className={classes.menuIcon} />
    </IconButton>
  )
}

export default MenuButtonComponent
