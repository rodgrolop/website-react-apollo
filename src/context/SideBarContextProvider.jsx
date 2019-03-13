import React, { useReducer, createContext } from 'react'
export const SideBarContext = createContext()

const initialState = {
  isDrawerOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'openDrawer':
      return { ...state, isDrawerOpen: true }
    case 'closeDrawer':
      return { ...state, isDrawerOpen: false }
    default:
      return { initialState }
  }
}

const SideBarContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <SideBarContext.Provider value={value}>
      {props.children}
    </SideBarContext.Provider>
  )
}
export default SideBarContextProvider
