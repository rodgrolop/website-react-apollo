import React, { useContext } from 'react'
import { DialogContext } from '../../../../context'

import IconButton from '@material-ui/core/IconButton'

import AccountCircle from '@material-ui/icons/AccountCircle'
const NavBarRightComponent = ({ classes }) => {
  const dialogContext = useContext(DialogContext)
  const openAuthDialog = () =>
    dialogContext.dispatch({ type: 'toggleSignDialog' })

  return (
    <React.Fragment>
      <IconButton aria-haspopup='true' onClick={openAuthDialog}>
        <AccountCircle className={classes.icon} />
      </IconButton>
    </React.Fragment>
  )
}

export default NavBarRightComponent
