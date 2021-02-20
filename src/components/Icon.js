import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

export default function Icon({ img, alt }) {

  const useStyles = makeStyles({
    iconImg: {
      width: 50,
      height: 50
    }
  });

  const classes = useStyles();

  return (
    <Grid item container xs={3} justify="center">
      {/* {children} */}
      <img src={img} className={classes.iconImg} alt={alt} />
    </Grid>
  );
}
