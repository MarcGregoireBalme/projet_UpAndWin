import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Star,
  Home,
  Search,
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
import './BottomNav.css';

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
            <IconButton
              aria-controls="burger-menu"
              aria-haspopup="true"
              onClick={handleClick}
              edge="start"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="burger-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to="/Profil">Mon profil</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/GamerStatistics">Mes statistiques</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/chat">ChatBox</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/Admin">Admin</Link></MenuItem>
              {
                sessionStorage.getItem('user_id') !== null ? (
                  <NavLink to="/">
                    <MenuItem onClick={clearSessionStorageLogOut} className="Deconnexion">Déconnexion</MenuItem>
                  </NavLink>
                ) : (
                  null
                )
              }
            </Menu>

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
