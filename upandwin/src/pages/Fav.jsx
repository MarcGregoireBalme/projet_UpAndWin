import React, { Component } from 'react';
import '../App.css';

import axios from 'axios';
import DisplayVideo from '../Components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    const userId = sessionStorage.getItem('user_id');
    return axios.post('/givefavs', {
      userId,
    }).then((res) => {
      this.setState({ videos: res.data });
    });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <div className="Page">
          <h1>Vidéos favorites</h1>
          <DisplayVideo videos={videos} />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Fav;
