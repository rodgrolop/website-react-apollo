import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'

const ThemeProviderComponent = props => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
}
export default ThemeProviderComponent
