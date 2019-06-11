import React, { Component } from 'react';
import './Topnav.css';
import { Link, NavLink, Redirect } from 'react-router-dom';
import ConnexionForm from './ConnexionForm';

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      game: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('Top-nav').style.top = '0';
    } else {
      document.getElementById('Top-nav').style.top = '-84px';
    }
    this.setState({
      prevScrollpos: currentScrollPos,
    });
  }

  handleGameChange = (selectValue) => {
    this.setState({
      game: selectValue,
    });
  }

  render() {
    const { game } = this.state;
    if (game) {
      return <Redirect to={game} />;
    }
    return (
      <div id="Top-nav">

        <div className="Top-nav-left">
          <NavLink to="/">
            <div className="Logo" />
          </NavLink>
          <div className="Game-selection">
            <select
              id="pet-select"
              onChange={e => this.handleGameChange(e.target.value)}
            >
              <option value="">Jeux</option>
              <option value="/Lol">League of Legends</option>
              <option value="/Wow">World of Warcraft</option>
            </select>
          </div>
        </div>
        <div className="Top-nav-right">
          <Link to="/Connexion">
            <div className="connexionbutton">
              <button type="button" className="Button" onClick={<ConnexionForm />}>
                Connexion
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Topnav;
