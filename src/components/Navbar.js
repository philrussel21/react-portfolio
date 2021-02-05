import React from 'react';
import { Link } from '@reach/router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../media/PA.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HamburgerNav from './HamburgerNav';
import NavLinks from './NavLinks';


export default function Navbar() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const useStyles = makeStyles({
    toolBar: {
      justifyContent: 'space-between'
    },
    logo: {
      height: 50,
      width: 80,
      cursor: 'pointer'
    },
    header: {
      marginBottom: '1em'
    }
  });

  const classes = useStyles();


  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.toolBar}>
        <Link to="/">
          <Logo className={classes.logo} />
        </Link>
        {matches
          ?
          <NavLinks />
          :
          <HamburgerNav />
        }
      </Toolbar>
    </AppBar>
  );
}