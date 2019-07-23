import React, { Component } from 'react';
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
      <div>
        <Topnav />
        <div className="Page">
          <div>
            <VideoForm />
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Admin;
