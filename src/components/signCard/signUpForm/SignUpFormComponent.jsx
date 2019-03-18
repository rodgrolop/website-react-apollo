import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`

const SignUpFormComponent = () => (
  <SignUpForm
  // history={history}
  // refetch={refetch}
  />
)

const INITIAL_STATE = {
  login: '',
  password: ''
}

class SignUpForm extends Component {
  state = { ...INITIAL_STATE }

  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = (event, signIn) => {
    signIn().then(async ({ data }) => {
      this.setState({ ...INITIAL_STATE })

      localStorage.setItem('token', data.signIn.token)

      // await this.props.refetch()

      // this.props.history.push(paths.LANDING)
    })

    event.preventDefault()
  }

  render() {
    const { login, password } = this.state

    const isInvalid = password === '' || login === ''

    return (
      <React.Fragment>
        <DialogContent>
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <Mutation mutation={SIGN_IN} variables={{ login, password }}>
            {(signIn, { data, loading, error }) => (
              <form onSubmit={event => this.onSubmit(event, signIn)}>
                <TextField
                  name="login"
                  value={login}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email or Username"
                />
                <TextField
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
                <Button
                  disabled={isInvalid || loading}
                  type="submit"
                  color="primary"
                >
                  Sign In
                </Button>

                <DialogActions>
                  {/* <Button onClick={props.toggleSignDialog} color="primary">
                  Cancel
                </Button> */}
                </DialogActions>
              </form>
            )}
          </Mutation>
        </DialogContent>
      </React.Fragment>
    )
  }
}

export default SignUpFormComponent

export { SignUpForm }
