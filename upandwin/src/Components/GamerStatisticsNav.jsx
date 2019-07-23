import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfilNav.css';

class ProfilNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
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
      document.getElementById('ProfilNav').style.top = '84px';
    } else {
      document.getElementById('ProfilNav').style.top = '0px';
    }
    this.setState({
      prevScrollpos: currentScrollPos,
    });
  }

  render() {
    return (
      <div id="ProfilNav">
        <Link className="ProfilNavButton" to="/Profil">
          <button
            type="button"
            className="SecondaryButton"
          >
            Mon profil
          </button>
        </Link>
        <Link className="ProfilNavButton" to="/GamerStatistics">
          <button
            type="button"
            className="Button"
          >
            Mes stat.
          </button>
        </Link>
      </div>
    );
  }
}

export default ProfilNav;
