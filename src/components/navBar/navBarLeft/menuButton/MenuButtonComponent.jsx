import React, { useContext } from 'react'

import { SideBarContext } from '../../../../context'

import { useStyles } from './styles'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButtonComponent = () => {
  const { dispatch } = useContext(SideBarContext)

  const classes = useStyles()

  const openDrawer = () => {
    dispatch({ type: 'openDrawer' })
  }

  return (
    <IconButton color='inherit' onClick={openDrawer}>
      <MenuIcon className={classes.menuIcon} />
    </IconButton>
  )
}

export default React.memo(MenuButtonComponent)
