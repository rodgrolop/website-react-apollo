import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from '../pages/landing'
import AuthenticationPage from '../pages/authentication'

const RootSwitch = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/authentication' component={AuthenticationPage} />
  </Switch>
)

export default RootSwitch
