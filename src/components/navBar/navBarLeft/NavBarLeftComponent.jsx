import React, { Component } from 'react'
import NavDrawerComponent from '../../navDrawer'
import MenuButtonComponent from './menuButton'

class NavBarLeftComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { isNavDrawerOpen: false }
  }

  toggleNavDrawer = () => {
    this.setState({ isNavDrawerOpen: !this.state.isNavDrawerOpen })
  }
  render() {
    return (
      <React.Fragment>
        <MenuButtonComponent toggleNavDrawer={this.toggleNavDrawer} />
        <NavDrawerComponent
          isNavDrawerOpen={this.state.isNavDrawerOpen}
          toggleNavDrawer={this.toggleNavDrawer}
        />
      </React.Fragment>
    )
  }
}

export default NavBarLeftComponent
