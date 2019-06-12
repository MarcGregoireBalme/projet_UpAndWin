import React, { Component } from 'react';
import '../App.css';
import './Wow.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Wow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/videos/Wow')
      .then((res) => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <Topnav />
        <h1 style={{ paddingTop: '10vh' }}>World of Warcraft</h1>
        <Addvertising />
        <DisplayVideo videos={videos} />
        <BottomNav />
      </div>
    );
  }
}

export default Wow;
