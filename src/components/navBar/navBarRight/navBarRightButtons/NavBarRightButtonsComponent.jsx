import React, { useContext } from 'react'
import { DialogsContext } from '../../../../context'

import IconButton from '@material-ui/core/IconButton'

import AccountCircle from '@material-ui/icons/AccountCircle'
const NavBarRightComponent = ({ classes }) => {
  const dialogsContext = useContext(DialogsContext)
  const openAuthDialog = () =>
    dialogsContext.dispatch({ type: 'toggleSignDialog' })

  return (
    <React.Fragment>
      <IconButton aria-haspopup='true' onClick={openAuthDialog}>
        <AccountCircle className={classes.icon} />
      </IconButton>
    </React.Fragment>
  )
}

export default NavBarRightComponent
