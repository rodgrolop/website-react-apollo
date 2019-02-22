import React, { useReducer, createContext } from 'react'
export const LayOutContext = createContext()

const initialState = {
  isNavDrawerOpen: false,
  isSignDialogOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleDrawer':
      return { ...state, isNavDrawerOpen: !state.isNavDrawerOpen }
    case 'toggleSignDialog':
      return { ...state, isSignDialogOpen: !state.isSignDialogOpen }
    default:
      return { initialState }
  }
}

const LayOutContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <LayOutContext.Provider value={value}>
      {props.children}
    </LayOutContext.Provider>
  )
}
export default LayOutContextProvider
