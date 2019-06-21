import React, { Component } from 'react';
import './FilterNav.css';
import { Link, NavLink, Redirect } from 'react-router-dom';

class FilterNav extends Component {
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
      document.getElementById('FilterNav').style.top = '84px';
    } else {
      document.getElementById('FilterNav').style.top = '0px';
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
      <div id="FilterNav">

        <div className="FilterNav-left">
          <NavLink to="/">
            <div className="Logo" />
          </NavLink>
          <div className="Game-selection">
            <select
              onChange={e => this.handleGameChange(e.target.value)}
            >
              <option value="">Jeux</option>
              <option value="/Lol">League of Legends</option>
              <option value="/Wow">World of Warcraft</option>
            </select>
          </div>
        </div>
        <div className="FilterNav-right">
          <Link to="/GamerStatistics">
            <div className="XP">
              <span className="Bold">
                2 456
              </span>
              &nbsp;xp
            </div>
          </Link>
        </div>

      </div>
    );
  }
}

export default FilterNav;
