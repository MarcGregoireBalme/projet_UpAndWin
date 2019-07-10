import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import BottomNav from '../Components/BottomNav';
import ProfilNav from '../Components/ProfilNav';
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
      <ProfilNav />
      <div style={{ paddingTop: '72px' }} />
      <div className="Page">
        <h1>Mon profil</h1>
        {/* <Link to="/Admin">Admin</Link> */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur venenatis consequat libero, euismod molestie nulla eleifend in.
        Praesent pellentesque enim id odio pretium, quis efficitur magna semper.
        Suspendisse cursus scelerisque tortor eget aliquet.
        Aliquam rutrum ligula sapien, eget laoreet ante lacinia quis.
        Aenean pharetra lorem enim, eu eleifend urna consequat sed.
        Integer hendrerit felis non vestibulum cursus.
        Pellentesque in sem sed ligula volutpat facilisis vitae at erat.
        Praesent ut mi nisi. Praesent dictum, sapien quis dignissim rutrum,
        nisi libero tempor enim, consequat fermentum lacus est in justo.
        Maecenas malesuada lectus in libero dapibus ultrices.
        Etiam feugiat arcu sit amet convallis mattis. Vivamus a ipsum ut arcu lacinia congue.
        Donec malesuada nisl erat, nec tincidunt nulla dictum sit amet. Vivamus a auctor leo.
        Ut id odio viverra, pharetra leo vel, sagittis velit.
        Donec at eleifend velit, nec pulvinar diam.
        </p>
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
