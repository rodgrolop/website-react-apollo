import React from 'react'

// Custom Browser Switch
import { RootSwitch } from '../../router'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'
import LazyDialogsComponent from '../lazyDialogs'

const PageContainerComponent = props => (
  <React.Fragment>
    <NavBarComponent />
    <NavDrawerComponent />
    <RootSwitch />
    <LazyDialogsComponent />
  </React.Fragment>
)

export default PageContainerComponent
