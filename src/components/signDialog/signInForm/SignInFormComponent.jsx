import React, { useContext, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { AppContext } from '../../../context'

const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`
const initialInputsState = {
  login: '',
  password: ''
}

const SignInFormComponent = props => {
  const [inputValues, setInputValues] = useState(initialInputsState)
  const appContext = useContext(AppContext)

  const updateField = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }

  const onSubmit = signIn => {
    signIn().then(async ({ data }) => {
      setInputValues({ ...inputValues, ...initialInputsState })
      localStorage.setItem('token', data.signIn.token)
      await appContext.setAuth(true)
      // this.props.history.push(paths.LANDING)
    })
  }
  const { login, password } = { ...inputValues }
  const isInvalid = password === '' || login === ''

  return (
    <DialogContent>
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <Mutation mutation={SIGN_IN} variables={{ login, password }}>
        {(signIn, { data, loading, error }) => (
          <React.Fragment>
            <TextField
              name="login"
              value={inputValues.login}
              onChange={updateField}
              type="text"
              placeholder="Email or Username"
            />
            <TextField
              name="password"
              value={inputValues.password}
              onChange={updateField}
              type="password"
              placeholder="Password"
            />

            <DialogActions>
              <Button
                disabled={isInvalid || loading}
                type="submit"
                color="primary"
                onClick={() => onSubmit(signIn)}
              >
                Sign In
              </Button>
            </DialogActions>
          </React.Fragment>
        )}
      </Mutation>
    </DialogContent>
  )
}

export default SignInFormComponent
