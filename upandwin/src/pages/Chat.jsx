import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';
import ChatBox from '../Components/Chatbox/Index';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
        <div className="Page">
          <div>
            <ChatBox />
          </div>
        </div>
        <BottomNav />
      </div>
    );
  }
}

function mstp(state) {
  return { ...state };
}

export default connect(mstp)(Chat);
