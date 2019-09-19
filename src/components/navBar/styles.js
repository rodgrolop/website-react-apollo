import { theme } from '../../theme'
export const styles = {
  grow: { flexGrow: 1 },
  appBar: {},
  toolBar: {
    minHeight: 48,
    [theme.breakpoints.up('sm')]: {
      padding: '0 16px'
    }
  },
  logo: {
    height: 36,
    margin: '6px 0 6px 18px'
  }
}
