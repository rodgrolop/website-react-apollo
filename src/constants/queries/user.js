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
export { GET_ME }
