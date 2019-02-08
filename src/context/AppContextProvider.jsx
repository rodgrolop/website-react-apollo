import React, { useState, createContext } from 'react'
export const AppContext = createContext()

const AppContextProvider = props => {
  const [isAuth, setAuthState] = useState(false)

  const setAuth = () => {
    setAuthState(true)
  }
  return (
    <AppContext.Provider value={{ isAuth, setAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
