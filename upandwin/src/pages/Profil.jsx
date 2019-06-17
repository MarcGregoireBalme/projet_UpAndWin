import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div className="profil">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>Profil</h1>
        </div>
        <div>
          {user ? user.alias : 'guest'}
        </div>
        <BottomNav />
      </div>
    );
  }
}

const mstp = state => ({
  ...state,
});

export default connect(mstp)(Profil);
