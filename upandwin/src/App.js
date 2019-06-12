import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Store from './Redux/Store';
import subForm from './Components/Form';
import Lol from './pages/Lol';
import Wow from './pages/Wow';
import Search from './pages/Search';
import Profil from './pages/Profil';
import GamerStatistics from './pages/GamerStatistics';
import Fav from './pages/Fav';
import ModalSuccess from './Components/ModalSuccess';


function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={Store}>
          <Route exact path="/" component={Home} />
          <Route path="/form/" component={subForm} />
          <Route path="/Lol" component={Lol} />
          <Route path="/Wow" component={Wow} />
          <Route path="/Search" component={Search} />
          <Route path="/Profil" component={Profil} />
          <Route path="/GamerStatistics" component={GamerStatistics} />
          <Route path="/Fav" component={Fav} />
          <ModalSuccess />
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
