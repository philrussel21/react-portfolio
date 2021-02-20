import React, { useState } from 'react';
import { Link } from '@reach/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function HamburgerNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles({
    btn: {
      marginTop: 'auto'
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


  return <div>
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
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="Home" />
        </StyledMenuItem>
      </Link>
      <Link to="/about">
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="About" />
        </StyledMenuItem>
      </Link>
      <Link to="/projects">
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="Projects" />
        </StyledMenuItem>
      </Link>
      <Link to="/contact">
        <StyledMenuItem onClick={handleClose}>
          <ListItemText primary="Contact" />
        </StyledMenuItem>
      </Link>
    </StyledMenu>
  </div>;
}