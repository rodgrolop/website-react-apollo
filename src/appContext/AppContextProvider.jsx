import React from 'react'
import { AppContext } from './appContext'

export default class AppContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuth: false
    }
  }

  toggleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth })
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          appContext: { ...this.state },
          toggleAuth: this.toggleAuth
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
