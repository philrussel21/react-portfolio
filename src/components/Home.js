import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hi from '../media/hi.png';
import { Typography, Grid, Paper } from '@material-ui/core';

export default function Home() {
  const useStyles = makeStyles({
    img: {
      height: 150,
      width: 150
    },
    badge: {
      width: 'min-content',
      borderRadius: '50%',
      padding: "0.5em",
      backgroundColor: "#7d2020"
    },
    heading1: {

    }
  });

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <Grid item container justify="center">
          <Paper className={classes.badge} elevation={10}>
            <img src={hi} alt="waving avatar" className={classes.img} />
          </Paper>
        </Grid>
        <Grid item>
          <Typography variant="h1">
            Phil Antiporda
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            Turning ideas into reality through Software Development
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
