import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Home,
  Favorite,
  Search,
  ChatBubble,
  Person,
} from '@material-ui/icons';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles(({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#272727',
    justifyContent: 'space-around',
  },
  grow: {
    flexGrow: 1,
  },
}));

function BottomNav() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit">
              <NavLink to="/"><Home color="inherit" /></NavLink>
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <NavLink to="/Fav"><Favorite color="inherit" /></NavLink>
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <NavLink to="/Search"><Search /></NavLink>
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <NavLink to="/"><ChatBubble /></NavLink>
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <NavLink to="/Profil"><Person /></NavLink>
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
}

function mstp({ users }) {
  return { userId: users.user_id };
}

export default connect(mstp)(BottomNav);
