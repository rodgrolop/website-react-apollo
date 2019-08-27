import React, { useContext, useState } from 'react'

import { DialogsContext } from '../../context'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import LockOpen from '@material-ui/icons/LockOpen'
import AccountCircle from '@material-ui/icons/AccountCircle'

import SignInFormComponent from './signInForm/'
import SignUpFormComponent from './signUpForm/'

const useStyles = makeStyles(styles)

const SignDialogComponent = () => {
  const { dispatch, state } = useContext(DialogsContext)

  const classes = useStyles()

  const closeAuthDialog = () => dispatch({ type: 'toggleSignDialog' })

  const [tabValueState, setTabValueState] = useState(0)

  const changeTab = (event, value) => {
    setTabValueState(value)
  }

  return (
    <Dialog
      open={state.isSignDialogOpen}
      onClose={closeAuthDialog}
      aria-labelledby='form-dialog-title'
    >
      <Tabs
        value={tabValueState}
        onChange={changeTab}
        centered
        indicatorColor='secondary'
        textColor='secondary'
      >
        <Tab icon={<LockOpen />} label='LOGIN' className={classes.tabs} />
        <Tab
          icon={<AccountCircle />}
          label='REGISTER'
          className={classes.tabs}
        />
      </Tabs>
      <DialogContent>
        {tabValueState === 0 && <SignInFormComponent />}
        {tabValueState === 1 && <SignUpFormComponent />}
      </DialogContent>
    </Dialog>
  )
}
export default SignDialogComponent
