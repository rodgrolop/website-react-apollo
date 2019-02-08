import React, { useContext, Suspense, lazy } from 'react'

import { AppContext, LayOutContext } from '../../context'

import NavBarComponent from '../navBar'
import NavDrawerComponent from '../navDrawer'

import CircularProgress from '@material-ui/core/CircularProgress'

import logo from '../../assets/logo.svg'
import '../../assets/App.css'

const SignDialogComponent = lazy(() => import('../signDialog'))

const PageContainerComponent = props => {
  const appContext = useContext(AppContext)
  const layOutContext = useContext(LayOutContext)
  return (
    <React.Fragment>
      <NavBarComponent />
      <NavDrawerComponent />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      {!appContext.isAuth && layOutContext.isSignDialogOpen && (
        <Suspense fallback={<CircularProgress color="secondary" size={20} />}>
          <SignDialogComponent />
        </Suspense>
      )}
    </React.Fragment>
  )
}

export default PageContainerComponent
