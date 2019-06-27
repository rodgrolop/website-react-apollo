import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

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
    </React.Fragment>
  )
}

export default LandingPage
