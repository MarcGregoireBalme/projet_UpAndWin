import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Topnav from '../Components/Topnav';
import GamerStatisticsNav from '../Components/GamerStatisticsNav';
import BottomNav from '../Components/BottomNav';
import Graph from '../Components/Graph';

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
      <div className="App">
        <Topnav />
        <GamerStatisticsNav />
        <div style={{ paddingTop: '72px' }} />
        <div className="Page">
          <h1>Mes stat.</h1>
          <Graph />
          <div>
            {users
              .filter(user => (
                user._id === sessionStorage.getItem('user_id')
              ))
              .map(user => (
                <div className="WinRoot" key={user._id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <div className="Number">{user.wins}</div>
                        <br />
                        <p className="WhiteText">wins</p>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <div className="Number">{user.viewed_videos.length}</div>
                        <br />
                        <p className="WhiteText">vidéos vues</p>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <div className="Number">{user.quizz_id.length}</div>
                        <br />
                        <p className="WhiteText">Quizz réalisés</p>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Paper className="WinPaper">
                        <div className="Number">{user.friends.length}</div>
                        <br />
                        <p className="WhiteText">amis</p>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              ))}
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default GamerStatistics;
