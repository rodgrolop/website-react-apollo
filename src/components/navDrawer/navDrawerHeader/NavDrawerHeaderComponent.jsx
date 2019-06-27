import React, { useContext } from 'react'

import { UserContext } from '../../../context'

import { makeStyles } from '@material-ui/core/styles'
import { styles } from './styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'

import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles(styles)

const NavDrawerHeaderComponent = () => {
  const { isAuth, username, profile } = useContext(UserContext).state

  const classes = useStyles()

  return isAuth ? (
    <React.Fragment>
      <Card className={classes.cardDrawer}>
        <CardMedia
          image='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Paella dish'
          className={classes.cardMedia}
        >
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='flex-end'
            className={classes.cardMediaGrid}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt={username}
                  src={profile.profilePicture}
                  className={classes.iconAvatar}
                >
                  {profile.profilePicture === null && username.charAt(0)}
                </Avatar>
              }
              title={username}
              subheader=''
              className={classes.cardHeader}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
          </Grid>
        </CardMedia>
      </Card>
    </React.Fragment>
  ) : (
    <div>Hola</div>
  )
}

export default NavDrawerHeaderComponent
