import theme from '../../../theme/theme'
export const styles = {
  navDrawerContent: {},
  navDrawerContentWide: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.drawerWidthEaseIn
    }),
    width: theme.drawerWidth
  },
  navDrawerContentMini: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.drawerWidthEaseOut
    }),
    width: theme.drawerWidthMini
  }
}
