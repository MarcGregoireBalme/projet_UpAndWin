import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Topnav from '../Components/Topnav';
import LoLFilter from '../Components/LoLFilter';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Lol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      filters: ['TopLane', 'MidLane'],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/videos/Lol')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    const { videos, filters } = this.state;
    return (
      <div>
        <Topnav />
        <LoLFilter />
        <div style={{ paddingTop: '40vh' }} />
        <DisplayVideo filters={filters} videos={videos} />
        <BottomNav />
      </div>
    );
  }
}

export default Lol;
