import React, { useContext } from 'react'
import { AppContext } from '../../../context'

import NavBarRightAuthButtonsComponent from './navBarRightAuthButtons'
import NavBarRightButtonsComponent from './navBarRightButtons'

const NavBarRightComponent = ({ classes, ...props }) => {
  const { me } = useContext(AppContext).state
  return (
    <React.Fragment>
      {me ? (
        <NavBarRightAuthButtonsComponent me={me} />
      ) : (
        <NavBarRightButtonsComponent />
      )}
    </React.Fragment>
  )
}
export default NavBarRightComponent
