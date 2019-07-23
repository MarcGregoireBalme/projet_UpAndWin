import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Topnav from '../Components/Topnav';
import LoLFilter from '../Components/LoLFilter';
import LolVideos from '../Components/LolVideos';
import BottomNav from '../Components/BottomNav';

class Lol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/videos/Lol')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <LoLFilter videos={videos} />
        <div className="Page">
          <LolVideos videos={videos} />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Lol;
