import gql from 'graphql-tag'

const REGISTER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
      user {
        username
        role
        profile {
          firstName
          lastName
          profilePicture
        }
      }
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
        profile {
          firstName
          lastName
          profilePicture
        }
      }
    }
  }
`
export { REGISTER, LOGIN }
