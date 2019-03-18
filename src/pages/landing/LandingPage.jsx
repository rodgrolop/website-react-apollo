import React from 'react'

import HeroPartial from '../../partials/hero'

// Assets
import heroImage from '../../assets/images/hero/LandingHero.jpeg'

const heroProps = {
  heroCardClass: 'heroCard90',
  heroTitle: 'Landing Page',
  heroSubtitle: 'A Badass Material-UI Kit based on Material Design.',
  backGroundImage: heroImage
}

const LandingPage = () => (
  <React.Fragment>
    <HeroPartial heroProps={heroProps} />
  </React.Fragment>
)

export default LandingPage
