import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

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
          <DropdownButton id="dropdown-basic-button" title="Jeux">
            <Dropdown.Item><NavLink to="/Lol">Lol</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/Wow">Wow</NavLink></Dropdown.Item>
          </DropdownButton>
          <Button variant="dark">
            <NavLink to="/Search">Search</NavLink>
          </Button>
          <Button variant="dark">
            <NavLink to="/Profil">Profil</NavLink>
          </Button>
        </Nav>
        <div>
          <h1>Profil</h1>
        </div>
      </div>
    );
  }
}

export default Home;
