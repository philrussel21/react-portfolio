import React, { useState } from 'react';
import { Link } from '@reach/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from '../media/PA.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    },
    header: {
      marginBottom: '1em'
    }
  });

  const classes = useStyles();

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolBar}>
        <Logo className={classes.logo} />
        <IconButton edge="start" color="inherit" aria-label="menu" aria-haspopup="true" className={classes.btn}
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/">
            <StyledMenuItem>
              <ListItemText primary="Home" />
            </StyledMenuItem>
          </Link>
          <Link to="/about">
            <StyledMenuItem>
              <ListItemText primary="About" />
            </StyledMenuItem>
          </Link>
          <Link to="/projects">
            <StyledMenuItem>
              <ListItemText primary="Projects" />
            </StyledMenuItem>
          </Link>
          <Link to="/contact">
            <StyledMenuItem>
              <ListItemText primary="Contact" />
            </StyledMenuItem>
          </Link>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
}