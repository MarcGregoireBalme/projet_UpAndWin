import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  Home,
  Favorite,
  Search,
  ChatBubble,
  Person,
  Publish,
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
  const [users, setUsers] = useState({ users: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'http://localhost:3005/users',
      );
      setUsers(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {
        sessionStorage.getItem('user_id') !== null ? (
          <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit">
                  <NavLink to="/"><Home color="inherit" /></NavLink>
                </IconButton>
                <div className={classes.grow} />
                <IconButton color="inherit">
                  <NavLink to="/Search"><Search /></NavLink>
                </IconButton>
                <div className={classes.grow} />
                <IconButton color="inherit">
                  <NavLink to="/chat"><ChatBubble /></NavLink>
                </IconButton>
                <div className={classes.grow} />
                {users[0] ? users
                  .filter(user => (
                    user._id === sessionStorage.getItem('user_id')
                  ))
                  .map(user => (
                    <div key={user._id}>
                      {
                        user.admin === true ? (
                          <IconButton color="inherit">
                            <NavLink to="/Admin"><Publish color="inherit" /></NavLink>
                          </IconButton>
                        ) : (
                          <IconButton color="inherit">
                            <NavLink to="/Fav"><Favorite color="inherit" /></NavLink>
                          </IconButton>
                        )
                      }
                    </div>
                  ))
                  : null
                }
                <div className={classes.grow} />
                <IconButton color="inherit">
                  <NavLink to="/Profil"><Person /></NavLink>
                </IconButton>
              </Toolbar>
            </AppBar>
          </React.Fragment>
        ) : null
      }
    </div>
  );
}

function mstp({ users }) {
  return { userId: users.user_id };
}

export default connect(mstp)(BottomNav);
