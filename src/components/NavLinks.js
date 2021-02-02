import React from 'react';
import { ButtonGroup, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';




export default function NavLinks() {

  const useStyles = makeStyles({
    navBtnCont: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around'
    },
    navBtn: {
      flexGrow: 1,
      color: '#fff',
      textAlign: 'center',
    },
    navLink: {
      fontFamily: `"Bungee", "cursive"`,
      fontSize: '2.5rem'
    }
  });

  const classes = useStyles();

  return (
    <ButtonGroup variant="text" aria-label="text primary button group" className={classes.navBtnCont}>
      <Link to="/" className={classes.navBtn}>
        <Button color="inherit">
          <Typography className={classes.navLink}>
            Home
        </Typography>
        </Button>
      </Link>

      <Link to="/about" className={classes.navBtn}>
        <Button color="inherit">
          <Typography className={classes.navLink}>
            About
        </Typography>
        </Button>
      </Link>

      <Link to="/projects" className={classes.navBtn}>
        <Button color="inherit">
          <Typography className={classes.navLink}>
            Projects
        </Typography>
        </Button>
      </Link>

      <Link to="/contact" className={classes.navBtn}>
        <Button color="inherit">
          <Typography className={classes.navLink}>
            Contact
        </Typography>
        </Button>
      </Link>

    </ButtonGroup>
  );
}
