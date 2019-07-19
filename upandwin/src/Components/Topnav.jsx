import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Topnav.css';

class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      game: '',
      users: [],
    };
  }

  componentWillMount() {
    axios.get('http://localhost:3005/users')
      .then((res) => {
        this.setState({ users: res.data });
      });
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
    const { game, users } = this.state;
    const { userId } = this.props;
    if (game) {
      return <Redirect to={game} />;
    }
    return (
      <div id="Top-nav">

        <div className="Top-nav-left">
          <NavLink to="/">
            <div className="Logo" />
          </NavLink>
          {
            sessionStorage.getItem('user_id') !== null ? (
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
            ) : (
              <div style={{ backgroundColor: '#272727', height: '80px' }} />
            )
          }
        </div>
        {
          sessionStorage.getItem('user_id') !== null ? (
            (
              <div className="Top-nav-right">
                <Link to="/GamerStatistics">
                  {users
                    .filter(user => (
                      user._id === sessionStorage.getItem('user_id')
                    ))
                    .map(user => (
                      <div>
                        <div>
                          <span className="Bold">
                            {user.wins}
                          </span>
                          {' '}
                          wins
                        </div>
                      </div>
                    ))}
                </Link>
              </div>
            )
          ) : (
            <div className="Top-nav-right">
              <Link to="/Connexion">
                <div className="connexionbutton">
                  <button type="button" className="Button">
                      Connexion
                  </button>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    );
  }
}

function mstp({ users }) {
  return { userId: users.user_id };
}

export default connect(mstp)(Topnav);
