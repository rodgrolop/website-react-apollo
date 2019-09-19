import { theme } from '../../theme'

export const styles = {
  HeroFullHeight: {
    height: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  gridContainer: {
    flexGrow: 1,
    height: '100%'
  },
  heroTitle: {
    color: '#000',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '8rem',
    letterSpacing: 1,
    fontWeight: 500,
    opacity: 0.5
  },
  heroSubtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '1rem'
  }
}
