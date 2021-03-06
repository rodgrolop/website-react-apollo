import React, { useContext, useState } from 'react'

import { Mutation } from 'react-apollo'

import { DialogsContext } from '../../../context'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import { REGISTER } from '../../../constants/mutations'

// Layout MUI Components
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

// Icons MUI Components
import AccountCircle from '@material-ui/icons/AccountCircle'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import Lock from '@material-ui/icons/Lock'

const useStyles = makeStyles(styles)

const initialInputsState = {
  username: '',
  email: '',
  password: '',
  showPassword: false,
  loadingButton: false,
  registerError: null
}

const SignUpFormComponent = props => {
  const [inputValues, setInputValues] = useState(initialInputsState)

  const dispatchDialogs = useContext(DialogsContext).dispatch

  const classes = useStyles()

  const updateField = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }
  const showPassword = () =>
    setInputValues({ ...inputValues, showPassword: !inputValues.showPassword })

  const saveUserData = data => {
    setInputValues({ ...inputValues, ...initialInputsState })
    localStorage.setItem('token', data.register.token)
    dispatchDialogs({ type: 'toggleSignDialog' })
  }

  const { username, email, password } = inputValues

  return (
    <Mutation
      mutation={REGISTER}
      variables={{ username, email, password }}
      onCompleted={data => saveUserData(data)}
    >
      {(registerMutation, { data, loading, error }) => (
        <React.Fragment>
          <Grid
            container
            spacing={8}
            alignItems='flex-end'
            justify='flex-start'
            className={classes.gridContainer}
          >
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item className={classes.gridInput}>
              <TextField
                name='username'
                type='text'
                label='Username'
                value={inputValues.username}
                onChange={updateField}
                className={classes.input}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={8}
            alignItems='flex-end'
            justify='flex-start'
            className={classes.gridContainer}
          >
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item className={classes.gridInput}>
              <TextField
                name='email'
                type='text'
                label='Email'
                value={inputValues.email}
                onChange={updateField}
                className={classes.input}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={8}
            alignItems='flex-end'
            justify='flex-start'
            className={classes.gridContainer}
          >
            <Grid item>
              <Lock />
            </Grid>
            <Grid item className={classes.gridInput}>
              <TextField
                name='password'
                type={inputValues.showPassword ? 'text' : 'password'}
                label='Password'
                value={inputValues.password}
                onChange={updateField}
                className={classes.input}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='Toggle password visibility'
                        onClick={showPassword}
                        className={classes.togglePasswordButton}
                      >
                        {inputValues.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          {error && (
            <Grid container justify='center' className={classes.gridContainer}>
              <Grid item>{error.message}</Grid>
            </Grid>
          )}
          <Grid container justify='center' className={classes.gridContainer}>
            <Grid item>
              {loading ? (
                <CircularProgress size={29} />
              ) : (
                <Button
                  type='submit'
                  variant='outlined'
                  color='primary'
                  onClick={registerMutation}
                >
                  Login
                </Button>
              )}
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Mutation>
  )
}
export default SignUpFormComponent
