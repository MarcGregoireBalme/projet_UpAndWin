import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';
import DisplayQuizz from '../Components/DisplayQuizz';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [],
      fileSelected: '',
    };

    this.fileSelectedhandler = this.fileSelectedhandler.bind(this);
  }

  fileSelectedhandler = (event) => {
    this.setState({
      fileSelected: URL.createObjectURL(event.target.files[0]),
    });
  }

  render() {
    const { user } = this.props;
    const { profils } = this.state;
    const { fileSelected } = this.state;
    return (
      <div className="profil">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>{user ? user.alias : profils[0]}</h1>
        </div>
        <div>
          {user ? user.alias : 'Guest'}
        </div>
        <DisplayQuizz />
        <div>
          <img alt="avatar" src={fileSelected} />
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
