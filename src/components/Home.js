import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hi from '../media/hi.png';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { Link } from '@reach/router';

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
    pill: {
      borderRadius: 25
    }
  });

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item container justify="center">
          <Paper className={classes.badge} elevation={10}>
            <img src={hi} alt="waving avatar" className={classes.img} />
          </Paper>
        </Grid>
        <Grid item>
          <Typography variant="h1" align="center">
            Phil Antiporda
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" align="center">
            Turning ideas into reality through Software Development
          </Typography>
        </Grid>
        <Grid item>
          <Link to="/projects">
            <Button variant="contained" color="secondary" size="large" className={classes.pill}>
              See my work
          </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
