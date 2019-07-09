import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Home,
  Star,
  Search,
  Person,
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
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

function BottomNav({ dispatch }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function clearSessionStorageLogOut() {
    sessionStorage.clear();
    dispatch({ type: 'LOGOUT', user_id: null });
  }

  return (
    <div>

      <div />

      <React.Fragment>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>

            <IconButton color="inherit">
              <NavLink to="/"><Home color="inherit" /></NavLink>
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <NavLink to="/Fav"><Star color="inherit" /></NavLink>
            </IconButton>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <NavLink to="/Search"><Search /></NavLink>
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
