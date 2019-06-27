import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  navDrawerContent: {},
  navDrawerContentWide: { width: theme.drawerWidth },
  navDrawerContentMini: { width: theme.drawerWidthMini }
}))
