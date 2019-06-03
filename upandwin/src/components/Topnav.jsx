import React, { Component } from 'react';
import Logo from '../img/Up&Win_Logo.png';

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={Logo} className="Logo-jeu" alt="" />
      </div>
    );
  }
}

export default Topnav;
