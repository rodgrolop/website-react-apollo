import React, { useReducer, createContext } from 'react'
export const DialogContext = createContext()

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

const DialogContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return (
    <DialogContext.Provider value={value}>
      {props.children}
    </DialogContext.Provider>
  )
}
export default DialogContextProvider
