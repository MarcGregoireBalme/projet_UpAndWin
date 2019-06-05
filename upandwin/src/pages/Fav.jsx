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
    axios.get('/videos')
      .then((res) => {
        this.setState({ videos: res.data });
        console.log(this.state.videos);
      });
  }


  render() {
    const { videos } = this.state;
    return (
      <div>
        <div>
          <Topnav />
        </div>
        <div>
          <h1 style={{ paddingTop: '10vh' }}>Fav video</h1>
          {
            videos.map(video => (
              <h1 key={video.id}>
                {video.titre}
                {' '}
Bonjour
                {' '}
              </h1>
            ))
          }
          <DisplayVideo />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Fav;
