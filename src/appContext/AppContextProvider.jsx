import React, { useState, createContext } from 'react'
export const AppContext = createContext()

const AppContextProvider = props => {
  const [isAuth, toggleAuthState] = useState(false)

  const toggleAuth = () => {
    toggleAuthState(!isAuth)
  }
  return (
    <AppContext.Provider value={{ isAuth, toggleAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
