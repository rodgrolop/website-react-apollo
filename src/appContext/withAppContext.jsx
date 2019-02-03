import React from 'react'
import { AppContext } from './appContext'

export function withAppContext(Component) {
  return function AppContextComponent(props) {
    return (
      <AppContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </AppContext.Consumer>
    )
  }
}
