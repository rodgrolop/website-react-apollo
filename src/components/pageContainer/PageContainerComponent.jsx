import React from 'react'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'

import '../../assets/App.css'

const PageContainerComponent = props => {
  return (
    <React.Fragment>
      <NavBarComponent />
      <NavDrawerComponent />
    </React.Fragment>
  )
}

export default PageContainerComponent
