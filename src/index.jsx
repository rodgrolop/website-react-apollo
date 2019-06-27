import React from 'react'
import ReactDOM from 'react-dom'
import RootComponent from './components/root'
import * as serviceWorker from './serviceWorker'

// ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />)
ReactDOM.render(<RootComponent />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
