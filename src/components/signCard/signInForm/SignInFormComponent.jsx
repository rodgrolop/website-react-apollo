import React, { useContext, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'

import AccountCircle from '@material-ui/icons/AccountCircle'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'

import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { AppContext } from '../../../context'

const SIGN_IN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
const initialInputsState = {
  email: '',
  password: '',
  showPassword: false
}

const SignInFormComponent = ({ classes, props }) => {
  const [inputValues, setInputValues] = useState(initialInputsState)
  const appContext = useContext(AppContext)

  const updateField = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }
  const showPassword = () =>
    setInputValues({ ...inputValues, showPassword: !inputValues.showPassword })

  const onSubmit = login => {
    login().then(async ({ data }) => {
      setInputValues({ ...inputValues, ...initialInputsState })
      localStorage.setItem('token', data.login.token)
      appContext.dispatch({ type: 'logInUser' })
      // this.props.history.push(paths.LANDING)
    })
  }
  const { email, password } = { ...inputValues }
  const isInvalid = password === '' || email === ''

  return (
    <DialogContent>
      <Mutation mutation={SIGN_IN} variables={{ email, password }}>
        {(login, { data, loading, error }) => (
          <React.Fragment>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor='adornment-user'>
                Email or Username
              </InputLabel>
              <Input
                id='adornment-user'
                name='email'
                type='text'
                value={inputValues.email}
                onChange={updateField}
                endAdornment={
                  <InputAdornment position='end'>
                    <AccountCircle className={classes.endAdornment} />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor='adornment-password'>Password</InputLabel>
              <Input
                id='adornment-password'
                name='password'
                type={inputValues.showPassword ? 'text' : 'password'}
                value={inputValues.password}
                onChange={updateField}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='Toggle password visibility'
                      onClick={showPassword}
                    >
                      {inputValues.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <DialogActions>
              <Button
                disabled={isInvalid || loading}
                type='submit'
                color='primary'
                onClick={() => onSubmit(login)}
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
