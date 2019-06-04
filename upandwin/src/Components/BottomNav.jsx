import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav className="justify-content-around">
          <Button variant="dark">
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
          </Button>
          <Button variant="dark">
            <NavLink to="/Search">Search</NavLink>
          </Button>
          <Button variant="dark">
            <NavLink to="/Profil">Profil</NavLink>
          </Button>
        </Nav>
      </div>
    );
  }
}

export default Home;
