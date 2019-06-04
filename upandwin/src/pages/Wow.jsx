import React, { Component } from 'react';
import '../App.css';
import './Wow.css';
import DisplayVideo from '../Components/DisplayVideo';
import 'bootstrap/dist/css/bootstrap.css';
import Topnav from '../Components/Topnav';
import Addvertising from '../Components/Addvertising';
import BottomNav from '../Components/BottomNav';

class Wow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topnav />
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
        <BottomNav />
      </div>
    );
  }
}

export default Wow;
