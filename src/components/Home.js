import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hi from '../media/hi.png';
import { Typography, Grid } from '@material-ui/core';

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    img: {
      height: 150,
      width: 150
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <div>
            <img src={hi} alt="waving avatar" className={classes.img} />
          </div>
        </Grid>
        <Grid item>
          <Typography>
            Phil Antiporda
          </Typography>
        </Grid>
        <Grid item>
          Rolling Text Animation
        </Grid>
        <Grid item>
          Turning ideas into reality through Software Development
        </Grid>
      </Grid>
    </Container>
  );
}
