import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
// import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // profils: {},
      // alias: '',
    };
  }

  /* componentWillMount() {
    const { alias } = this.state;
    axios
      .get(`http://localhost:3005/users/${alias}`)
      .then((res) => {
        console.log(res.data);
          this.setState({
          profils: res.data.users,
        });
      });
  } */

  render() {
    // const { users } = this.props;
    // const { profils } = this.state;
    return (
      <div className="Page">
        <Topnav />
        <h1>Mon profil</h1>
        <BottomNav />
      </div>
    );
  }
}

function mstp(state) {
  return { ...state };
}

export default connect(mstp)(Profil);
