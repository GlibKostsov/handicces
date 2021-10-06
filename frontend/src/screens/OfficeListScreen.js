import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import OfficeCard from '../components/card/OfficeCard'

export default function OfficeListScreen() {
  return (
    <Fragment>
      <h1 style={{ padding: '2rem 0' }}>
        Notre selection espaces handi-accessibles
      </h1>
      <Grid container alignItems='center' justify='center' spacing={4}>
        <Grid item xs={6} md={6}>
          <OfficeCard />
        </Grid>
        <Grid item xs={6} md={6}>
          <OfficeCard />
        </Grid>

        <Grid item xs={6} md={6}>
          <OfficeCard />
        </Grid>
        <Grid item xs={6} md={6}>
          <OfficeCard />
        </Grid>
        <Grid item xs={6} md={6}>
          <OfficeCard />
        </Grid>
        <Grid item xs={6} md={6}>
          <OfficeCard />
        </Grid>
      </Grid>
    </Fragment>
  )
}
