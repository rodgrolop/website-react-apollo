import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  grow: { flexGrow: 1 },
  appBar: {},
  toolBar: {
    minHeight: '48px'
  },
  logo: {
    height: '36px',
    margin: '6px 0 6px 18px'
  },
  pageTitle: {
    fontSize: '22px',
    marginLeft: '12px',
    color: '#eee',
    fontWeight: '500'
  }
}))
