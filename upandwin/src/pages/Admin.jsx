import React, { Component } from 'react';
import '../App.css';
// import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import VideoForm from '../Components/VideoForm';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="Admin">
        <h1>Admin page</h1>
        <VideoForm />
      </div>
    );
  }
}

export default Admin;
