import { createMuiTheme } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[500],
      main: grey[900],
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      contrastText: '#fff'
    },
    textPrimary: grey,
    textSecondary: '#fff',
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    // Use typography v2
    useNextVariants: true,
    fontSize: 12
  },
  drawerWidth: 240,
  drawerWidthMini: 40,
  overrides: {
    // General overrides
    MuiSvgIcon: {
      root: {
        color: 'white',
        height: 24,
        width: 24
      }
    },
    // NavBar overrides
    // NavBarLeft overrides
    // NavBarRight overrides
    MuiAvatar: {
      root: {
        height: 32,
        width: 32,
        fontSize: '1rem',
        textTransform: 'uppercase'
      },
      colorDefault: {
        color: 'white',
        backgroundColor: '#f50057'
      }
    }
  }
})

export default theme
