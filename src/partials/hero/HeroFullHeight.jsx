import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(styles)

const HeroPartial = ({ heroProps, ...props }) => {
  const classes = useStyles()
  return (
    <CardMedia
      image={heroProps.backGroundImage}
      title={heroProps.heroTitle}
      className={classes.HeroFullHeight}
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
              {/* {heroProps.heroSubtitle} */}
            </Typography>
          </Grid>
        )}
        {props.children}
      </Grid>
    </CardMedia>
  )
}

export default HeroPartial
