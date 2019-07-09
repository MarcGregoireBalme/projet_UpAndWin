/* eslint-disable no-console */
import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
// import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';
import InputSlider from '../Components/Slider';

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
    const { users } = this.props;
    const { profils } = this.state;
    return (
      <div className="Page">
        <Topnav />
        <div>
          <h1 style={{ paddingTop: '10vh' }}>{users ? users.user.alias : profils[0]}</h1>
        </div>
        <div>
          {users ? users.user.alias : 'Guest'}
        </div>
        <br />
        <div className="comp">Teamplay</div>
        <InputSlider id="Slider1" />
        <div className="comp">Sang-froid</div>
        <InputSlider id="Slider2" />
        <div className="comp">Analise</div>
        <InputSlider id="Slider3" />
        <div className="comp">Competitivité</div>
        <InputSlider id="Slider4" />
        <div className="comp">Experience</div>
        <InputSlider id="Slider5" />
        <div className="comp">Prise d’initiative</div>
        <InputSlider id="Slider6" />

        <button type="button">Soumettre</button>
        <BottomNav />
      </div>
    );
  }
}

function mstp(state) {
  return { ...state };
}

export default connect(mstp)(Profil);
