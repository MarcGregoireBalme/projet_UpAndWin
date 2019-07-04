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
      id: '',
    };
  }

  componentWillMount() {
    this.setState({
      id: localStorage.getItem('id'),
    });
  }

  render() {
    const { users } = this.props;
    const { profils } = this.state;
    console.log(users);
    return (
      <div className="profil">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>{users ? users.user.alias : profils[0]}</h1>
        </div>
        <div>
          {users ? users.user.alias : 'Guest'}
        </div>
        <div>
          <img alt="avatar" src={fileSelected} />
        </div>
        <BottomNav />
      </div>
    );
  }
}

const mstp = function users(...state) {
  console.log('mstp', ...state);
  return { ...state };
};

export default connect(mstp)(Profil);
