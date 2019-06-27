import React, { useReducer, createContext } from 'react'
export const SideBarContext = createContext()

const initialState = {
  isDrawerOpen: false,
  drawerPersistent: true,
  miniDrawer: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'openDrawer':
      return { ...state, isDrawerOpen: true }
    case 'closeDrawer':
      return { ...state, isDrawerOpen: false }
    case 'setPersistentDrawer':
      return { ...state, drawerPersistent: true }
    case 'setTemporaryDrawer':
      return { ...state, drawerPersistent: false }
    case 'setMiniDrawer':
      return { ...state, miniDrawer: true }
    case 'unsetMiniDrawer':
      return { ...state, miniDrawer: false }
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
