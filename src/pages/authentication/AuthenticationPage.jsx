import React from 'react'

import HeroPartial from '../../partials/hero'
import SignCardComponent from './../../components/signCard'

// Assets
import heroImage from '../../assets/images/hero/LandingHero.jpeg'

const heroProps = {
  heroCardClass: 'classes.heroCard100',
  backGroundImage: heroImage
}

const AuthenticationPage = props => {
  const activeTab = props.location.state.activeTab
  return (
    <React.Fragment>
      <HeroPartial heroProps={heroProps}>
        <SignCardComponent activeTab={activeTab} />
      </HeroPartial>
    </React.Fragment>
  )
}

export default AuthenticationPage
