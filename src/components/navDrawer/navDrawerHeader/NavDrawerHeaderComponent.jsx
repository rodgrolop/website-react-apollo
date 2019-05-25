import React, { useContext } from 'react'
import { AppContext } from '../../../context'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'

import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const NavDrawerHeaderComponent = ({ classes }) => {
  const { me } = useContext(AppContext).state
  return me ? (
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
                  alt={me.username}
                  src={me.profilePicture}
                  className={classes.iconAvatar}
                >
                  {me.profilePicture === null && me.username.charAt(0)}
                </Avatar>
              }
              title={me.username}
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
