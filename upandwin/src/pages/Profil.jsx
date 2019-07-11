/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';
import InputSlider from '../Components/Slider';
import Chart from '../Components/Chart';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamplay: 30,
      sang: 30,
      analise: 30,
      competitivité: 30,
      experience: 30,
      initiative: 30,
    };
  }

  postProfil = () => {
    const { attribut } = this.state;
    console.log('tototo');
    axios
      .put(`http://localhost:3005/users/${attribut}`, {
        value: { },
      });
  }

  getAttribut = (value) => {
    this.setState({
      teamplay: value,
    },
    console.log(this.state.teamplay, 'coucou'));
  }

  getAttribut2 = (value) => {
    this.setState({
      sang: value,
    },
    console.log(this.state.sang, 'coucou2'));
  }

  getAttribut3 = (value) => {
    this.setState({
      analise: value,
    },
    console.log(this.state.analise, 'coucou3'));
  }

  getAttribut4 = (value) => {
    this.setState({
      competitivité: value,
    },
    console.log(this.state.competitivité, 'coucou4'));
  }

  getAttribut5 = (value) => {
    this.setState({
      experience: value,
    },
    console.log(this.state.experience, 'coucou5'));
  }

  getAttribut6 = (value) => {
    this.setState({
      initiative: value,
    },
    console.log(this.state.initiative, 'coucou6'));
  }


  render() {
    return (
      <div className="Page">
        <Topnav />
        <br />
        <div className="comp">Teamplay</div>
        <InputSlider id="Slider1" getAttribut={this.getAttribut} />

        <div className="comp">Sang-froid</div>
        <InputSlider id="Slider2" getAttribut2={this.getAttribut2} />

        <div className="comp">Analise</div>
        <InputSlider id="Slider3" getAttribut3={this.getAttribut3} />

        <div className="comp">Competitivité</div>
        <InputSlider id="Slider4" getAttribut4={this.getAttribut4} />

        <div className="comp">Experience</div>
        <InputSlider id="Slider5" getAttribut5={this.getAttribut5} />

        <div className="comp">Prise d’initiative</div>
        <InputSlider id="Slider6" getAttribut6={this.getAttribut6} />


        <button type="button" onClick={this.postProfil} className="submitProfil">Soumettre</button>

        <Chart />
        <BottomNav />
      </div>
    );
  }
}

function mstp(state) {
  return { ...state };
}

export default connect(mstp)(Profil);
