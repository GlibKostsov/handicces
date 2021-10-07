import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import HearingIcon from '@material-ui/icons//Hearing'
import AccessibleIcon from '@material-ui/icons//Accessible'
import AccessibilityIcon from '@material-ui/icons/Accessibility'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: '70%',
    margin: '2rem 0',
  },
  title: { textAlign: 'left', marginTop: '5rem' },
  photos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    border: '1px red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '1rem',
  },
  mainImage: { marginBottom: '1rem' },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  solid: {
    borderTop: '3px solid #bbb',
    marginTop: '1rem',
  },
}))

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg',
    title: 'Image',
    author: 'author',
    cols: 3,
  },
]

export default function OfficeDetail() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.title}>
        <h1 style={{ marginBottom: '0.5rem' }}>
          La Maison de Protis (MSE100) for 4 persons.
        </h1>
        <ListItemText
          secondary='
              (3 reviews)
              ·
              Marseille, Provence-Alpes-Côte dAzur, France'
        />
      </div>
      <section className={classes.photos}>
        <Box className={classes.box}>
          <Grid container className={classes.mainImage}>
            <Grid item xs={12} md={12}>
              <img
                style={{ maxWidth: '100%' }}
                src='https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg'
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <img
                style={{ maxWidth: '100%' }}
                src='https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                style={{ maxWidth: '100%' }}
                src='https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                style={{ maxWidth: '100%' }}
                src='https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg'
              />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className={classes.description}>
        <h2 style={{ marginBottom: 0 }}>
          Entire rental unit hosted by Angela - Interhome
        </h2>

        <ListItemText
          style={{ borderBottom: '1px solid #bbb', paddingBottom: '1rem' }}
          secondary='4 guests, · 2 bedrooms, · 2 beds, · 1 bath'
        />
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HearingIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Entire home'
              secondary='You’ll have the apartment to yourself.'
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccessibleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Enhanced Clean'
              secondary='This Host committed to 5-step enhanced cleaning process.'
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccessibilityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Great location'
              secondary='00% of recent guests gave the location a 5-star rating.'
            />
          </ListItem>
          <ListItem
            style={{
              borderBottom: '1px solid #bbb',
              paddingBottom: '1rem',
              marginBottom: '1rem',
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <RemoveRedEyeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Great check-in experience'
              secondary='100% of recent guests gave the check-in process a 5-star rating.'
            />
          </ListItem>
        </List>

        <ListItemText
          style={{ textAlign: 'left' }}
          secondary=' Note: You can directly book the best price if your travel dates are available, all discounts are already included. In the following house description you will find all information about our listing.
              "La Maison de Protis (MSE100)", 3-room apartment 107 m2 on 8th floor. Bright, renovated in 2020, comfortable and modern furnishings: living/dining room with dining table, TV and air conditioning. Exit to the balcony. 1 room with 1 french bed'
        />
      </section>
    </>
  )
}
