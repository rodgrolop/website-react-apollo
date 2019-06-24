import React, { useReducer, createContext } from 'react'
export const ProfileContext = createContext()

const initialState = {
  profile: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setProfile':
      return {
        ...state,
        profile: action.profile
      }
    default:
      return { initialState }
  }
}

const ProfileContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <ProfileContext.Provider value={value}>
      {props.children}
    </ProfileContext.Provider>
  )
}
export default ProfileContextProvider
