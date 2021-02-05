import React from 'react';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import lost from '../media/lost.png';
import { Container, Paper, Typography, Button } from '@material-ui/core';


export default function NotFound() {
  const useStyles = makeStyles((theme) => ({
    img404: {
      height: 100,
      width: 100,
      [theme.breakpoints.up('sm')]: {
        height: 150,
        width: 150
      },
    },
    badge404: {
      width: 'min-content',
      borderRadius: '50%',
      padding: "0.5em",
      backgroundColor: "#7d2020",
      display: 'inline-block',
      fontSize: '1rem'
    },
    heading404: {
      fontSize: '7rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '12rem',
      },
    },
    btn404: {
      marginTop: '1em',
      display: 'block',
      textAlign: 'center'
    },
    pill: {
      borderRadius: 25
    }
  }));

  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h1" align="center">
        <span className={classes.heading404}>4</span>
        <Paper className={classes.badge404} elevation={10}>
          <img src={lost} alt="confused avatar" className={classes.img404} />
        </Paper>
        <span className={classes.heading404}>4</span>
      </Typography>
      <Typography variant="subtitle1" align="center">
        Whoops! The page you're looking for does not exist.
      </Typography>
      <Link to="/" className={classes.btn404}>
        <Button variant="contained" color="secondary" size="large" className={classes.pill}>
          Back to Home
          </Button>
      </Link>
    </Container>
  );
}