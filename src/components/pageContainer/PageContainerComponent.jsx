import React, { useContext } from 'react'
import { UserContext } from '../../context'

import { Query } from 'react-apollo'
import { GET_ME } from '../../constants/queries'

// Custom Browser Switch
import { RootSwitch } from '../../router'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'
import LazyDialogsComponent from '../lazyDialogs'
import ContentFixComponent from '../contentFix'

const PageContainerComponent = props => {
  const { dispatch, state } = useContext(UserContext)
  const { isAuth } = state
  const saveUserData = data => {
    if (!isAuth) {
      dispatch({
        type: 'setUser',
        ...data.me
      })
    }
  }
  return (
    <Query query={GET_ME} onCompleted={data => saveUserData(data)}>
      {({ loading, error, data }) => {
        return (
          <React.Fragment>
            <NavBarComponent />
            <NavDrawerComponent />
            <ContentFixComponent>
              <RootSwitch />
            </ContentFixComponent>
            <LazyDialogsComponent />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default PageContainerComponent
