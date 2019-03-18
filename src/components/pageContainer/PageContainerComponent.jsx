import React from 'react'

// Custom Browser Switch
import { RootSwitch } from '../../router'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'

const PageContainerComponent = () => {
  return (
    <React.Fragment>
      <NavBarComponent />
      <NavDrawerComponent />
      <RootSwitch />
    </React.Fragment>
  )
}

export default PageContainerComponent
