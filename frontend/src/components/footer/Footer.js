import React from 'react'
import SimpleContainer from '../container/SimpleContainer'
import Grid from '@material-ui/core/Grid'

export default function Footer() {
  return (
    <footer>
      <SimpleContainer>
        <Grid
          style={{ marginTop: '3rem', marginBottom: '2rem' }}
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12}>
            Copyright &copy; Handiaccés
          </Grid>
        </Grid>
      </SimpleContainer>
    </footer>
  )
}
