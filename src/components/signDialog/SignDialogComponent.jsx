import React from 'react'

import Dialog from '@material-ui/core/Dialog'

import SignInFormComponent from './signInForm/'
// import SignUpFormComponent from './signInForm/'

const SignDialogComponent = ({ isSignDialogOpen, toggleSignDialog }) => {
  return (
    <Dialog
      open={isSignDialogOpen}
      onClose={toggleSignDialog}
      aria-labelledby="form-dialog-title"
    >
      <SignInFormComponent toggleSignDialog={toggleSignDialog} />
      {/* <SignUpFormComponent /> */}
    </Dialog>
  )
}
export default SignDialogComponent
