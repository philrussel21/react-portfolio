import React from 'react';
import { ReactComponent as Dev } from '../media/dev.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


export default function Footer() {
  const useStyles = makeStyles({
    devLogo: {
      boxSizing: "content-box",
      borderBottom: "10px solid #7d2020",
      borderRadius: 25,
      height: 200,
      width: "100%",

    }
  });

  const classes = useStyles();

  return (
    <Container>
      <Dev className={classes.devLogo} />
    </Container>
  );
}
