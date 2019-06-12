import React, { Component } from 'react';
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
        <div className="Addvertising-img">
          <div className="Addvertising">
            <img src={LogoJeu} className="Logo-jeu" alt="" />
            <p className="AddvertisingTitle">
              <span className="Text-background">
                Les tutos
                {' '}
                <span className="Semi-bold-Italic">League of Legends</span>
                {' '}
                sont maintenant disponibles sur Up&Win !
              </span>
            </p>
            <button type="button" className="Button">
              Go !
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Addvertising;
