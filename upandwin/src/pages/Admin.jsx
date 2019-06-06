import React, { Component } from 'react';
import '../App.css';
// import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Admin">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>Admin</h1>
        </div>
        <div>
          Admin here
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Admin;
