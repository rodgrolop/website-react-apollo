import theme from '../../theme/theme'
export const styles = {
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.contentMarginEaseOut
    }),
    marginLeft: 0
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.contentMarginEaseIn
    }),
    marginLeft: theme.drawerWidth
  },
  contentShiftMini: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.contentMarginEaseIn
    }),
    marginLeft: theme.drawerWidthMini
  }
}
