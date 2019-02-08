import React, { useContext } from 'react'

import { LayOutContext } from '../../context'

import Dialog from '@material-ui/core/Dialog'

import SignInFormComponent from './signInForm/'
// import SignUpFormComponent from './signInForm/'

const SignDialogComponent = ({ isSignDialogOpen, toggleSignDialog }) => {
  const layOutContext = useContext(LayOutContext)
  return (
    <Dialog
      open={layOutContext.isSignDialogOpen}
      onClose={layOutContext.toggleSignDialog}
      aria-labelledby="form-dialog-title"
    >
      <SignInFormComponent toggleSignDialog={layOutContext.toggleSignDialog} />
      {/* <SignUpFormComponent /> */}
    </Dialog>
  )
}
export default SignDialogComponent
