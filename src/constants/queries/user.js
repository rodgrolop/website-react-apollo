import gql from 'graphql-tag'

const GET_ME = gql`
  {
    me {
      id
      username
      email
      role
    }
  }
`
const SIGN_UP = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`
const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`
export { GET_ME, SIGN_UP, SIGN_IN }
