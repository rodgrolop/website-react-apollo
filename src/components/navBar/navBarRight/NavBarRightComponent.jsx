import React, { Component } from 'react'

import { withAppContext } from '../../../appContext'

import IsAuthAccountButtonsComponent from './isAuthAccountButtons'
import NoIsAuthAccountButtonsComponent from './noIsAuthAccountButtons'

class NavBarRightComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { isSignDialogOpen: false }
  }

  toggleSignDialog = () => {
    this.setState({ isSignDialogOpen: !this.state.isSignDialogOpen })
  }

  render() {
    console.log('navright')
    return this.props.appContext.isAuth ? (
      <IsAuthAccountButtonsComponent toggleSignDialog={this.toggleSignDialog} />
    ) : (
      // <SignDialogComponent
      //   isSignDialogOpen={this.state.isSignDialogOpen}
      //   toggleSignDialog={this.toggleSignDialog}
      // />
      <NoIsAuthAccountButtonsComponent
        toggleSignDialog={this.toggleSignDialog}
      />
    )
  }
}

export default withAppContext(NavBarRightComponent)
