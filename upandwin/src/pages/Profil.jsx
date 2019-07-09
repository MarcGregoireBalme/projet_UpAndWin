import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
// import axios from 'axios';
import BottomNav from '../Components/BottomNav';
import Topnav from '../Components/Topnav';


function Profil({ dispatch }) {
  function clearSessionStorageLogOut() {
    sessionStorage.clear();
    dispatch({ type: 'LOGOUT', user_id: null });
  }

  // const { users } = this.props;
  // const { profils } = this.state;
  return (
    <div>
      <Topnav />
      <div className="Page">
        <h1>Mon profil</h1>
        {
          sessionStorage.getItem('user_id') !== null ? (
            <button
              type="button"
              onClick={clearSessionStorageLogOut}
              className="SecondButton"
            >
              Déconnexion
            </button>
          ) : (
            null
          )
        }

        {/* <Link to="/Profil">Mon profil</Link>
        <Link to="/GamerStatistics">Mes statistiques</Link>
        <Link to="/Admin">Admin</Link>
          */}
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
