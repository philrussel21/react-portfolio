import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../media/PA.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
  const useStyles = makeStyles({
    toolBar: {
      justifyContent: 'space-between'
    },
    logo: {
      height: 50,
      width: 80,
      cursor: 'pointer'
    },
    btn: {
      marginTop: 'auto'
    }
  });

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Logo className={classes.logo} />
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.btn}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}