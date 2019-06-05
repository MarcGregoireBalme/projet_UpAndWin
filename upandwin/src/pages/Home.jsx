import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
        <Addvertising />
        <DisplayVideo />
        <BottomNav />
      </div>
    );
  }
}

export default Home;
