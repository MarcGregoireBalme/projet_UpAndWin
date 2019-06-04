import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profil">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>Profil</h1>
        </div>
        <div>
          Profil here
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default Profil;
