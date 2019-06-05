import React, { Component } from 'react';
import '../App.css';
import Topnav from '../Components/Topnav';

class GamerStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
        <h1>Gamer Statistics</h1>
      </div>
    );
  }
}

export default GamerStatistics;
