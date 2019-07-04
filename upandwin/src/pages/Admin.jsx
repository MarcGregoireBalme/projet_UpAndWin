import React, { Component } from 'react';
import '../App.css';
// import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import VideoForm from '../Components/VideoForm';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="Admin">
        <Topnav />
        <h1>admin</h1>
        <div style={{ marginBottom: '80px' }}>
          <VideoForm />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Admin;
