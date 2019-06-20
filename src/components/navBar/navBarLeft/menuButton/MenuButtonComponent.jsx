import React, { useContext } from 'react'

import { SideBarContext } from '../../../../context'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButtonComponent = ({ classes }) => {
  const { dispatch } = useContext(SideBarContext)

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
