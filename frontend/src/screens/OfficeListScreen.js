import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import OfficeCard from '../components/card/OfficeCard'

import { Link } from 'react-router-dom'

export default function OfficeListScreen() {
  return (
    <Fragment>
      <h1 style={{ padding: '2rem 0' }}>
        Notre selection espaces handi-accessibles
      </h1>
      <Grid container alignItems='center' justify='center' spacing={4}>
        <Grid item xs={12} md={6}>
          <Link to={'office/1'}>
            <OfficeCard />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to={'office/1'}>
            <OfficeCard />
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Link to={'office/1'}>
            <OfficeCard />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to={'office/1'}>
            <OfficeCard />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <OfficeCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <OfficeCard />
        </Grid>
      </Grid>
    </Fragment>
  )
}
