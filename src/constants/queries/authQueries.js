import gql from 'graphql-tag'

const GET_ME = gql`
  {
    me {
      username
      role
      profilePicture
    }
  }
`
export { GET_ME }
