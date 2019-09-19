import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'

import HeroFullHeight from '../../partials/hero'

const useStyles = makeStyles(styles)

const heroProps = {
  heroTitle: 'rgl',
  heroSubtitle: '',
  backGroundImage: ''
}

const LandingPage = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <HeroFullHeight heroProps={heroProps} />
      <Container maxWidth='xl' className={classes.mainContainer}>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>What We do</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>Skills</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>Portfolio</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>Blog</Typography>
        </Paper>
        <Paper className={classes.normalPaper}>
          <Typography variant='h6'>TODO</Typography>
        </Paper>
      </Container>
    </React.Fragment>
  )
}

export default LandingPage
