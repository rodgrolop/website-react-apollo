import React from 'react'

import HeroFullHeight from '../../partials/hero'

// Assets
import heroImage from '../../assets/images/hero/LandingHero.jpeg'

const heroProps = {
  heroTitle: 'Landing Page',
  heroSubtitle: 'A Badass Material-UI Kit based on Material Design.',
  backGroundImage: heroImage
}

const LandingPage = () => (
  <React.Fragment>
    <HeroFullHeight heroProps={heroProps} />
  </React.Fragment>
)

export default LandingPage
