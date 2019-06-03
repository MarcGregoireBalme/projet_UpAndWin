import React, { Component } from 'react';
import '../App.css';
import './wow.css';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import DisplayVideo from '../components/DisplayVideo';
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
        <div className="wow-img">
          <div className="Addvertising">
            <h1>
              <span className="Text-background">
                Les tutos
                {' '}
                <span className="Semi-bold-Italic">World of Warcraft</span>
                {' '}
sont
                maintenant disponibles sur Up&Win !
              </span>
            </h1>
            <button type="button" className="Button">
              Go !
            </button>
          </div>
        </div>
        <div>
          <DisplayVideo />
        </div>
      </div>
    );
  }
}

export default Home;
