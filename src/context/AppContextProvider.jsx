import React, { useReducer, createContext } from 'react'
export const AppContext = createContext()

const initialState = {
  auth: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'logInUser':
      return {
        ...state,
        auth: action.auth
      }
    case 'logOutUser':
      return { ...state, auth: false }
    default:
      return { initialState }
  }
}

const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}
export default AppContextProvider
