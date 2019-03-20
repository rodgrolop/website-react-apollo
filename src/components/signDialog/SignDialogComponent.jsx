import React, { useContext, useState } from 'react'
import { AppContext } from '../../context'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import LockOpen from '@material-ui/icons/LockOpen'
import AccountCircle from '@material-ui/icons/AccountCircle'

import SignInFormComponent from './signInForm/'
import SignUpFormComponent from './signUpForm/'

const SignDialogComponent = ({ classes }) => {
  const appContext = useContext(AppContext)
  const closeAuthDialog = () => appContext.dispatch({ type: 'closeAuthDialog' })

  const [tabValueState, setTabValueState] = useState(0)
  const changeTab = (event, value) => {
    setTabValueState(value)
  }

  return (
    <Dialog
      open={appContext.state.showAuthDialog}
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
