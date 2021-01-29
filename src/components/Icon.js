import { Grid } from '@material-ui/core';
import React from 'react';

export default function Icon({ children }) {
  return (
    <Grid item container xs={3} justify="center">
      {children}
    </Grid>
  );
}
