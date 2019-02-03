import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import SignInFormComponent from './signInForm/'
// import SignUpFormComponent from './signInForm/'

const SignDialogComponent = props => (
  <Dialog
    open={props.isSignDialogOpen}
    onClose={props.toggleSignDialog}
    aria-labelledby="form-dialog-title"
  >
    <SignInFormComponent />
    {/* <SignUpFormComponent /> */}
  </Dialog>
)
export default SignDialogComponent
