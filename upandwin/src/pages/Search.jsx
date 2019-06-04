import React, { Component } from 'react';
import '../App.css';

import DisplayVideo from '../Components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Topnav />
        </div>
        <div>
          <h1 style={{ paddingTop: '10vh' }}>Search</h1>
          <DisplayVideo />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Search;
