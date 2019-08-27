import React, { useContext } from 'react'

import { DialogsContext } from '../../../../context'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles(styles)

const NavBarRightComponent = () => {
  const { dispatch } = useContext(DialogsContext)

  const classes = useStyles()

  const openAuthDialog = () => dispatch({ type: 'toggleSignDialog' })

  return (
    <IconButton aria-haspopup='true' onClick={openAuthDialog}>
      <AccountCircle className={classes.icon} />
    </IconButton>
  )
}

export default NavBarRightComponent
