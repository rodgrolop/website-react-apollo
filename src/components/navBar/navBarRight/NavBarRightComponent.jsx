import React, { useContext } from 'react'
import { AppContext, ProfileContext } from '../../../context'

// Layout MUI Components
import CircularProgress from '@material-ui/core/CircularProgress'

import NavBarRightAuthButtonsComponent from './navBarRightAuthButtons'
import NavBarRightButtonsComponent from './navBarRightButtons'

import { Query } from 'react-apollo'
import { GET_ME } from '../../../constants/queries'

const NavBarRightComponent = () => {
  const profileContext = useContext(ProfileContext)
  const appContext = useContext(AppContext)
  const { auth } = useContext(AppContext).state
  const { profile } = profileContext.state
  const saveProfileData = data => {
    console.log(data)
    profileContext.dispatch({
      type: 'setProfile',
      profile: { ...data.me.profile }
    })
    appContext.dispatch({ type: 'logInUser', auth: true })
  }
  if (!auth)
    return (
      <Query query={GET_ME} onCompleted={data => saveProfileData(data)}>
        {({ loading, error, data }) => {
          console.log('hola')
          if (loading) return <CircularProgress size={29} />
          if (error) return <NavBarRightButtonsComponent />
          return <NavBarRightAuthButtonsComponent profile={data.me} />
        }}
      </Query>
    )
  return <NavBarRightAuthButtonsComponent profile={profile} />
}
export default NavBarRightComponent
