import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Lol extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
        <h1>League of Legends</h1>
        <h1>League of Legends</h1>
        <Addvertising />
        <DisplayVideo />
        <BottomNav />
      </div>
    );
  }
}

export default Lol;
