import React, { useContext } from 'react'
import { LayOutContext } from '../../../../context'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MenuButtonComponent = () => {
  const appContext = useContext(LayOutContext)
  return (
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={appContext.toggleNavDrawer}
    >
      {console.log('hola')}
      <MenuIcon />
    </IconButton>
  )
}

export default React.memo(MenuButtonComponent)
