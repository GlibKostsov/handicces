import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import HearingIcon from '@material-ui/icons//Hearing'
import AccessibleIcon from '@material-ui/icons//Accessible'
import AccessibilityIcon from '@material-ui/icons/Accessibility'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#CCD8C7',
  },
}))

export default function OfficeCard() {
  const classes = useStyles()

  return (
    <Card elevation={8} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='bureau' className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Mega Bureau Centre Montpellier'
        subheader='September 14, 2016'
      />
      <CardMedia
        className={classes.media}
        image='https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80'
        title='Salle Megaboom'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          This impressive office is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>

        <IconButton aria-label='hearing'>
          <HearingIcon />
        </IconButton>

        <IconButton aria-label='accessible'>
          <AccessibleIcon />
        </IconButton>
        <IconButton aria-label='accessibility'>
          <AccessibilityIcon />
        </IconButton>
        <IconButton aria-label='vision'>
          <RemoveRedEyeIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
