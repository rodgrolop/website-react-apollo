import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  icon: {
    color: 'white',
    height: 24,
    width: 24
  },
  iconAvatarButton: {
    padding: 8
  },
  iconAvatar: {
    color: 'white',
    height: 32,
    width: 32,
    fontSize: '1rem',
    backgroundColor: '#f50057',
    textTransform: 'uppercase'
  }
}))
