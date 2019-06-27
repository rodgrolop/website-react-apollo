import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  cardDrawer: {
    borderRadius: 0,
    boxShadow: 'none',
    minHeight: 120
  },
  cardMedia: { height: '100%' },
  cardMediaGrid: {
    height: '100%',
    background:
      'linear-gradient(to top, rgba(256,256,256,0.7) 0%, ' +
      'rgba(256,256,256,0.3) 70%, rgba(256,256,256,0) 100%)'
  },
  cardHeader: { height: 'auto' },
  iconAvatar: {
    color: 'white',
    backgroundColor: '#f50057',
    textTransform: 'uppercase'
  }
}))
