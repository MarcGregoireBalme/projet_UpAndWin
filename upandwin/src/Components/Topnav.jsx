import React, { Component } from 'react';
import './Topnav.css';

class Topnav extends Component {
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
      document.getElementById('Top-nav').style.top = '0';
    } else {
      document.getElementById('Top-nav').style.top = '-84px';
    }
    this.setState({
      prevScrollpos: currentScrollPos,
    });
  };

  render() {
    return (
      <div id="Top-nav">

        <div className="Top-nav-left">
          <div className="Logo" />
          <div className="Game-selection">Jeux</div>
        </div>

        <div className="Top-nav-right">
          <div className="XP">
            <span className="Bold">
              2 456
            </span>
            &nbsp;xp
          </div>
        </div>

      </div>
    );
  }
}

export default Topnav;
