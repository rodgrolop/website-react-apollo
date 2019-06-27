import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import NavBarRightComponent from './navBarRight'
import NavBarLeftComponent from './navBarLeft'

import { ReactComponent as Logo } from '../../assets/svg/Caffeine_logo.svg'

const useStyles = makeStyles(styles)

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const NavBarComponent = props => {
  const classes = useStyles()

  return (
    <ElevationScroll {...props}>
      <AppBar variant='regular' className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <NavBarLeftComponent />
          <Logo className={classes.logo} />
          <div className={classes.grow} />
          <NavBarRightComponent />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default NavBarComponent
