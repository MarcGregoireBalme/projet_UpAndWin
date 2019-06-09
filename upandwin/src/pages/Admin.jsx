import React, { Component } from 'react';
import '../App.css';
// import './Admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserForm from '../Components/UserForm';

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
        <UserForm />
      </div>
    );
  }
}

export default Admin;
