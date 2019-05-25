import React, { useContext } from 'react'
import { AppContext } from '../../context'

import { Query } from 'react-apollo'
import { GET_ME } from '../../constants/queries'

// Custom Browser Switch
import { RootSwitch } from '../../router'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'
import LazyDialogsComponent from '../lazyDialogs'

const PageContainerComponent = props => {
  const appContext = useContext(AppContext)
  const { me } = appContext.state
  const saveUserData = data => {
    if (!me || me === null) {
      appContext.dispatch({ type: 'logInUser', me: data.me })
    }
  }
  return (
    <Query query={GET_ME} onCompleted={data => saveUserData(data)}>
      {({ loading, error, data }) => {
        return (
          <React.Fragment>
            <NavBarComponent />
            <NavDrawerComponent />
            <RootSwitch />
            <LazyDialogsComponent />
          </React.Fragment>
        )
      }}
    </Query>
  )
}

export default PageContainerComponent
