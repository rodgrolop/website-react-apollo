import React from 'react'

import HeroPartial from '../../partials/hero'

// Assets
import heroImage from '../../assets/images/hero/LandingHero.jpeg'

const heroProps = {
  heroCardClass: 'classes.heroCard100',
  backGroundImage: heroImage
}

const AuthenticationPage = () => {
  return (
    <React.Fragment>
      <HeroPartial heroProps={heroProps} />
    </React.Fragment>
  )
}

export default AuthenticationPage
