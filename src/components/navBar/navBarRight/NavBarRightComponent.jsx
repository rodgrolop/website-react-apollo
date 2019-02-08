import React, { useContext } from 'react'
import { AppContext, LayOutContext } from '../../../context'

import AccountButtonsComponent from './accountButtons'

const NavBarRightComponent = () => {
  const appContext = useContext(AppContext)
  const layOutContext = useContext(LayOutContext)
  return (
    <React.Fragment>
      <AccountButtonsComponent
        isAuth={appContext.isAuth}
        toggleSignDialog={layOutContext.toggleSignDialog}
      />
    </React.Fragment>
  )
}

export default NavBarRightComponent
