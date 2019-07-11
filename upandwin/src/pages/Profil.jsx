import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.css';
import BottomNav from '../Components/BottomNav';
import ProfilNav from '../Components/ProfilNav';
import Topnav from '../Components/Topnav';

function Profil({ dispatch }) {
  const [users, setUsers] = useState({ users: [] });
  const [quizz, setQuizz] = useState({ quizz: [] });

  function clearSessionStorageLogOut() {
    sessionStorage.clear();
    dispatch({ type: 'LOGOUT', user_id: null });
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'http://localhost:3005/users',
      );
      setUsers(result.data);
      const quizzResult = await axios(
        'http://localhost:3005/quizzes',
      );
      setQuizz(quizzResult.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Topnav />
      {users[0] ? users
        .filter(user => (
          user._id === sessionStorage.getItem('user_id')
        ))
        .map(user => (
          <div key={user._id}>
            {
              user.admin === true ? (
                null
              ) : (
                <div>
                  <div style={{ paddingTop: '72px' }} />
                  <ProfilNav />
                </div>
              )
            }

          </div>
        ))
        : null
      }
      <div className="Page">
        {users[0] && quizz[0] ? users
          .filter(user => (
            user._id === sessionStorage.getItem('user_id')
          ))
          .map(user => (
            <div key={user._id}>
              <div className="Row36">
                <p className="Orange">Alias</p>
                <h1>{user.alias}</h1>
                <div className="Divider" />
              </div>
              <div className="Row36">
                <p className="Orange">E-mail</p>
                <h1>{user.email}</h1>
                <div className="Divider" />
              </div>

              {
                user.quizz_idTodo.length > 0 ? (
                  <div className="Row36">
                    <p className="Orange">{`(${user.quizz_idTodo.length}) quizz disponible(s)`}</p>
                    <div>
                      {
                        user.quizz_idTodo
                          .map(quizzID => (
                            <div className="Row" key={quizzID}>

                              <h1>
                                {(quizz
                                  .filter(obj => (obj._id === `${quizzID}`))
                                  .map(obj => obj.title))}
                              </h1>

                              <Link to={`/quizz/${quizzID}`}>
                                <button
                                  type="button"
                                  className="Button"
                                >
                                  Faire le quizz
                                </button>
                              </Link>
                            </div>
                          ))
                      }
                    </div>
                    <div className="Divider" />
                  </div>
                ) : (
                  null
                )
              }

            </div>
          ))
          : null}
        {/* <Link to="/Admin">Admin</Link> */}
        {
          sessionStorage.getItem('user_id') !== null ? (
            <Link to="/">
              <button
                type="button"
                onClick={clearSessionStorageLogOut}
                className="SecondButton"
              >
                Déconnexion
              </button>
            </Link>
          ) : (
            null
          )
        }
      </div>
      <BottomNav />
    </div>
  );
}

function mstp(state) {
  return {
    ...state,
    userId: state.users.user_id,
  };
}

export default connect(mstp)(Profil);
