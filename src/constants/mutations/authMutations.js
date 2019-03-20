import gql from 'graphql-tag'

const SIGN_UP = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`
const LOGIN = gql`
  mutation($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
      user {
        username
        role
        profilePicture
      }
    }
  }
`
export { SIGN_UP, LOGIN }
