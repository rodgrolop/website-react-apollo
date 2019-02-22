import React from 'react'

import NavBarComponent from '../navBar'

import logo from '../../assets/logo.svg'
import '../../assets/App.css'

const PageContainerComponent = props => {
  return (
    <React.Fragment>
      <NavBarComponent />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </React.Fragment>
  )
}

export default PageContainerComponent
