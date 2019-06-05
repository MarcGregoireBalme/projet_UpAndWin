import React, { Component } from 'react';
import '../App.css';
import './Wow.css';
import 'bootstrap/dist/css/bootstrap.css';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import DisplayVideo from '../Components/DisplayVideo';
import BottomNav from '../Components/BottomNav';

class Wow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
        <h1>World of Warcraft</h1>
        <h1>World of Warcraft</h1>
        <Addvertising />
        <DisplayVideo />
        <BottomNav />
      </div>
    );
  }
}

export default Wow;
