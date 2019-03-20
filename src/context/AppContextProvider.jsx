import React, { useReducer, createContext } from 'react'
export const AppContext = createContext()

const initialState = {
  isUserAuth: false,
  user: {},
  showAuthDialog: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'logInUser':
      return {
        ...state,
        isUserAuth: true,
        user: action.user,
        showAuthDialog: false
      }
    case 'logOutUser':
      return { ...state, isUserAuth: false }
    case 'openAuthDialog':
      return { ...state, showAuthDialog: true }
    case 'closeAuthDialog':
      return { ...state, showAuthDialog: false }
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
