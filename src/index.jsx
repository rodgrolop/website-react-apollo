import React from 'react'
import ReactDOM from 'react-dom'
import './assets/index.css'
import RootComponent from './components/root'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<RootComponent />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
