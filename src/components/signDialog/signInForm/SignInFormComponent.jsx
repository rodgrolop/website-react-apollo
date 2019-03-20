import React, { useContext, useState } from 'react'
import { graphql, compose } from 'react-apollo'
import { withApollo } from 'react-apollo'
import { AppContext } from '../../../context'

import { LOGIN } from '../../../constants/mutations'

// Layout MUI Components
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
// Icons MUI Components
import AccountCircle from '@material-ui/icons/AccountCircle'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'
import Lock from '@material-ui/icons/Lock'

const initialInputsState = {
  login: 'rodgrolop',
  password: 'graphql',
  showPassword: false
}

const SignInFormComponent = ({ classes, ...props }) => {
  const [inputValues, setInputValues] = useState(initialInputsState)
  const appContext = useContext(AppContext)

  const updateField = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value })
  }
  const showPassword = () =>
    setInputValues({ ...inputValues, showPassword: !inputValues.showPassword })

  const onSubmit = async () => {
    const { login, password } = inputValues
    await props
      .loginMutation({
        variables: { login, password }
      })
      .then(result => {
        setInputValues({ ...inputValues, ...initialInputsState })
        localStorage.setItem('token', result.data.login.token)
        appContext.dispatch({ type: 'logInUser', user: result.data.login.user })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
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
      <Grid container justify='center' className={classes.gridContainer}>
        <Grid item>
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            onClick={() => onSubmit()}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default compose(
  withApollo,
  graphql(LOGIN, { name: 'loginMutation' })
)(SignInFormComponent)
