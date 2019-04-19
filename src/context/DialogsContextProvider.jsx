import React, { useReducer, createContext } from 'react'
export const DialogsContext = createContext()

const initialState = {
  isSignDialogOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleSignDialog':
      return { ...state, isSignDialogOpen: !state.isSignDialogOpen }
    default:
      return { initialState }
  }
}

const DialogsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <DialogsContext.Provider value={value}>
      {props.children}
    </DialogsContext.Provider>
  )
}
export default DialogsContextProvider
