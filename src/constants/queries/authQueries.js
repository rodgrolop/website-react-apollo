import gql from 'graphql-tag'

const GET_ME = gql`
  {
    me {
      id
      username
      profilePicture
      role
    }
  }
`
export { GET_ME }
