import React, { useState, createContext } from 'react'
export const LayOutContext = createContext()

const LayOutContextProvider = props => {
  const [isNavDrawerOpen, toggleNavDrawerState] = useState(false)
  const [isSignDialogOpen, toggleSignDialogState] = useState(false)
  const toggleNavDrawer = () => {
    toggleNavDrawerState(!isNavDrawerOpen)
  }

  const toggleSignDialog = () => {
    toggleSignDialogState(!isSignDialogOpen)
  }
  return (
    <LayOutContext.Provider
      value={{
        isNavDrawerOpen,
        toggleNavDrawer,
        isSignDialogOpen,
        toggleSignDialog
      }}
    >
      {props.children}
    </LayOutContext.Provider>
  )
}
export default LayOutContextProvider
