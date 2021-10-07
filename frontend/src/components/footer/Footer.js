import React from 'react'
import SimpleContainer from '../container/SimpleContainer'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    background: 'transparent',
    boxShadow: 'none',
    color: 'black',
    marginTop: '2rem',
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer>
      <AppBar className={classes.bar} position='static'>
        <SimpleContainer>
          <Toolbar className={classes.text}>
            <Typography color='black'>Copyright &copy; Handiccès</Typography>
          </Toolbar>
        </SimpleContainer>
      </AppBar>
    </footer>
  )
}
