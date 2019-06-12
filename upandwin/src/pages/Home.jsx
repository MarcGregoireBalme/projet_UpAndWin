import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import axios from 'axios';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideoHorizontal from '../Components/DisplayVideoHorizontal';
import BottomNav from '../Components/BottomNav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/videos')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <Addvertising />
        <DisplayVideoHorizontal videos={videos} />
        <BottomNav />
      </div>
    );
  }
}

export default Home;
