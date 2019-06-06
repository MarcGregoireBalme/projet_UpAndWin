import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Lol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    axios.get('/videos/Lol')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <h1 style={{ paddingTop: '10vh' }}>League of Legends</h1>
        <Addvertising />
        <DisplayVideo videos={videos} />
        <BottomNav />
      </div>
    );
  }
}

export default Lol;
