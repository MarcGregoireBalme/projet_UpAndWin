import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import axios from 'axios';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    // axios.get('/videos')
    //   .then((res) => {
    //     this.setState({ videos: res.data });
    //   });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <Addvertising />
        {/* <DisplayVideo videos={videos} /> */}
        <BottomNav />
      </div>
    );
  }
}

export default Home;
