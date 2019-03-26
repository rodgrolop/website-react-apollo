import gql from 'graphql-tag'

const GET_ME = gql`
  {
    me {
      id
      username
      role
      profile {
        firstName
        lastName
        profilePicture
      }
    }
  }
`
export { GET_ME }
