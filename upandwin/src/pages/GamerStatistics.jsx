import React, { Component } from 'react';
import '../App.css';
import './GamerStatistics.css';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Topnav from '../Components/Topnav';


class GamerStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/users')
      .then((res) => {
        this.setState({ users: res.data });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="Page">
        <Topnav />
        <h1>Gamer Statistics</h1>

        <div className="">
          <div className="">
            {users
              .filter(user => (
                user._id === '5d00c750c249a32854d976db'
              ))
              .map(user => (
                <div className="WinRoot" key={user._id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <h1>{user.wins}</h1>
                        <br />
                        <p>wins</p>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <h1>{user.viewed_videos.length}</h1>
                        <br />
                        <p>vidéos vues</p>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <h1>{user.friends.length}</h1>
                        <br />
                        <p>amis</p>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              ))}
          </div>
        </div>

      </div>
    );
  }
}

export default GamerStatistics;
