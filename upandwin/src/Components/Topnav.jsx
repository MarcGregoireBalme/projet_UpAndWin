import React, { Component } from 'react';
import './Topnav.css';

let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('Top-nav').style.top = '0';
  } else {
    document.getElementById('Top-nav').style.top = '-84px';
  }
  prevScrollpos = currentScrollPos;
};

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Top-nav">

        <div className="Flex-row">
          <div className="Logo" />
          <p className="Game-selection">Jeux</p>
        </div>

        <div>
          <p className="XP">
            <span className="Bold">
              2 456
            </span>
            &nbsp;xp
          </p>
        </div>

      </div>
    );
  }
}

export default Topnav;
