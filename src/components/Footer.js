import React from 'react';
import { ReactComponent as Dev } from '../media/dev.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';


export default function Footer() {
  const useStyles = makeStyles({
    devLogo: {
      boxSizing: "content-box",
      borderBottom: "10px solid #7d2020",
      borderRadius: 25
    },
    devCont: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      maxWidth: 600,
      height: 200,
      paddingBottom: '1em'
    }
  });

  const classes = useStyles();

  return (
    <Container className={classes.devCont}>
      <Dev className={classes.devLogo} />
      <Typography variant="caption" color="primary">
        <span>Copyright&copy;</span> Phil Antiporda 2021
      </Typography>
    </Container>
  );
}
