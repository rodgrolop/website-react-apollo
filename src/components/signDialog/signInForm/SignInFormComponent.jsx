import React, { useContext, useState } from 'react'

import { Mutation } from 'react-apollo'

import { UserContext, DialogsContext } from '../../../context'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import { LOGIN } from '../../../constants/mutations'

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
  login: 'juan',
  password: 'juan',
  showPassword: false,
  loadingButton: false,
  loginError: null
}

const SignInFormComponent = props => {
  const [inputValues, setInputValues] = useState(initialInputsState)

  const dispatchUser = useContext(UserContext).dispatch
  const dispatchDialogs = useContext(DialogsContext).dispatch

  const classes = useStyles()

  const updateField = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }
  const showPassword = () =>
    setInputValues({ ...inputValues, showPassword: !inputValues.showPassword })

  const saveUserData = data => {
    setInputValues({ ...inputValues, ...initialInputsState })
    localStorage.setItem('token', data.login.token)
    dispatchUser({
      type: 'setUser',
      ...data.login.user
    })
    dispatchDialogs({ type: 'toggleSignDialog' })
  }

  const { login, password } = inputValues

  return (
    <Mutation
      mutation={LOGIN}
      variables={{ login, password }}
      onCompleted={data => saveUserData(data)}
    >
      {(loginMutation, { data, loading, error }) => (
        <React.Fragment>
          <Grid
            container
            spacing={2}
            alignItems='flex-end'
            justify='flex-start'
            className={classes.gridContainer}
          >
            <Grid item>
              <AccountCircle className={classes.icon} />
            </Grid>
            <Grid item className={classes.gridInput}>
              <TextField
                name='login'
                type='text'
                label='Email or Username'
                value={inputValues.login}
                onChange={updateField}
                className={classes.input}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems='flex-end'
            justify='flex-start'
            className={classes.gridContainer}
          >
            <Grid item>
              <Lock className={classes.icon} />
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
                          <Visibility className={classes.icon} />
                        ) : (
                          <VisibilityOff className={classes.icon} />
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
                <CircularProgress size={24} />
              ) : (
                <Button
                  type='submit'
                  variant='outlined'
                  color='primary'
                  onClick={loginMutation}
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
export default SignInFormComponent
