import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
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
