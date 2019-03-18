import React from 'react'

import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const HeroPartial = ({ classes, heroProps, ...props }) => {
  return (
    <React.Fragment>
      <CardMedia
        image={heroProps.backGroundImage}
        title={heroProps.heroTitle}
        className={classes.heroCard100}
      >
        <Grid
          container
          className={classes.gridContainer}
          direction='row'
          justify='center'
          alignItems='center'
        >
          {heroProps.heroTitle && (
            <Grid item className={classes.gridItem} xs={12} sm={10}>
              <Typography className={classes.heroTitle} variant='h1'>
                {heroProps.heroTitle}
              </Typography>
            </Grid>
          )}
          {heroProps.heroSubtitle && (
            <Grid item className={classes.gridItem} xs={12} sm={10}>
              <Typography className={classes.heroSubtitle} variant='h4'>
                {heroProps.heroSubtitle}
              </Typography>
            </Grid>
          )}
          {props.children}
        </Grid>
      </CardMedia>
    </React.Fragment>
  )
}

export default HeroPartial
