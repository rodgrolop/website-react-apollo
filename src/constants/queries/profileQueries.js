import gql from 'graphql-tag'

const MY_PROFILE = gql`
  {
    myProfile {
      user {
        username
        role
      }
      firstName
      lastName
      profilePicture
    }
  }
`
export { MY_PROFILE }
