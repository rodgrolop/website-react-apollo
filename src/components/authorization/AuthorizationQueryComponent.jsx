import React from 'react'
import { Query } from 'react-apollo'
import { Redirect } from 'react-router-dom'

import { paths, queries } from '../../constants'

const AuthorizationQueryComponent = conditionFn => Component => props => (
  <Query query={queries.userQueries.GET_ME}>
    {({ data, networkStatus }) => {
      if (networkStatus < 7) {
        return null
      }

      return conditionFn(data) ? (
        <Component {...props} />
      ) : (
        <Redirect to={paths.SIGN_IN} />
      )
    }}
  </Query>
)

export default AuthorizationQueryComponent
