import React, { useReducer, createContext } from 'react'
export const UserContext = createContext()

const initialState = {
  isAuth: false,
  username: null,
  role: null,
  profile: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        isAuth: true,
        username: action.username,
        role: action.role,
        profile: action.profile
      }
    case 'unSetUser':
      return {
        ...state,
        ...initialState
      }
    default:
      return { initialState }
  }
}

const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}
export default UserContextProvider
