import React, { Component } from 'react';
import '../App.css';

import DisplayVideo from '../Components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
        <h1>Fav video</h1>
        <div>
          <DisplayVideo />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Fav;
