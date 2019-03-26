import React, { useReducer, createContext } from 'react'
export const AppContext = createContext()

const initialState = {
  me: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'getMe':
      return {
        ...state,
        me: action.me
      }
    case 'logInUser':
      return {
        ...state,
        me: action.me
      }
    case 'logOutUser':
      return { ...state, me: null }
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
