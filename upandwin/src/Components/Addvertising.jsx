import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Addvertising.css';
import LogoJeu from '../Images/League_of_Legends_Logo.png';

class Addvertising extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="Add-img">
          <div className="Add">
            <img src={LogoJeu} className="Logo-jeu" alt="" />
            <p className="Add-title">
              <span className="Text-background">
                Les tutos
                {' '}
                <span className="Semi-bold-Italic">League of Legends</span>
                {' '}
                sont maintenant disponibles sur Up&Win !
              </span>
            </p>
            <Link to="/Lol">
              <button type="button" className="Button">
                Go !
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Addvertising;
