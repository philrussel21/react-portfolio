import React from 'react';
import { ReactComponent as Dev } from '../media/dev.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


export default function Footer() {
  const useStyles = makeStyles((theme) => ({
    devLogo: {
      height: 300,
      width: "100%",
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <Dev className={classes.devLogo} />
    </Container>
  );
}
