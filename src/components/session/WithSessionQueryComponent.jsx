import React from 'react'
import { Query } from 'react-apollo'
import { queries } from '../../constants'

const WithSessionQueryComponent = Component => props => (
  <Query query={queries.userQueries.GET_ME}>
    {({ data, refetch }) => (
      <Component {...props} session={data} refetch={refetch} />
    )}
  </Query>
)

export default WithSessionQueryComponent
