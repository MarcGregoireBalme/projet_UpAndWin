import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Stars from '@material-ui/icons/Stars';
import Home from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import './BottomNav.css';


const useStyles = makeStyles(({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#353535',
    justifyContent: 'space-around',
  },
  grow: {
    flexGrow: 1,
  },
}));

function BottomNav() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit">
            <NavLink to="/"><Home color="dark" /></NavLink>
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <NavLink to="/Fav"><Stars color="dark" /></NavLink>
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <NavLink to="/Search"><SearchIcon /></NavLink>
          </IconButton>
          <div className={classes.grow} />
          <IconButton edge="start" color="inherit">
            <NavLink to="/Profil"><MenuIcon /></NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default BottomNav;
