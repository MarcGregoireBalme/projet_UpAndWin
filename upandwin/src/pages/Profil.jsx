import React, { Component } from 'react';
import '../App.css';
import './Profil.css';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profils: [],
      fileSelected: '',
    };

    this.fileSelectedhandler = this.fileSelectedhandler.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      const { user } = this.props;
      const userString = JSON.stringify(user.alias);
      localStorage.setItem('user', userString);
    }
    const { profils } = this.state;
    profils.push(JSON.parse(localStorage.getItem('user')));
    this.setState({ profils });
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
        <form method="POST" encType="multipart/form-data" action="sendFile">
          <input
            type="file"
            name="myFile"
            onChange={this.fileSelectedhandler}
          />
          <button type="button">Upload</button>
        </form>
        <div>
          {user ? user.alias : 'guest'}
        </div>
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
