import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'

import HeroFullHeight from '../../partials/hero'

// Assets
import heroImage from '../../assets/images/hero/LandingHero.jpeg'

const useStyles = makeStyles(styles)

const heroProps = {
  heroTitle: 'Landing Page',
  heroSubtitle: 'A Badass Material-UI Kit based on Material Design.',
  backGroundImage: heroImage
}

const LandingPage = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <HeroFullHeight heroProps={heroProps} />
      <Container maxWidth='xl' className={classes.mainContainer}>
        <Paper className={classes.raisedPaper}>
          <Typography variant='h6'>Container</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>Container</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>Container</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>Container</Typography>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default LandingPage
