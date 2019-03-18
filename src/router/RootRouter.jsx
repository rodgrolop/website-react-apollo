import React from 'react'

// Browser Router
import { BrowserRouter } from 'react-router-dom'

const RootRouter = props => {
  return <BrowserRouter>{props.children}</BrowserRouter>
}

export default RootRouter
