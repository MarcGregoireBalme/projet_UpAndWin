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
import Admin from './pages/Admin';
import ConnexionForm from './Components/ConnexionForm';
import RegisterForm from './Components/RegisterForm';
import DisplayQuizz from './Components/DisplayQuizz';

function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={Store}>
          <Route exact path="/" component={Home} />
          <Route path="/form/" component={subForm} />
          <Route path="/Connexion" component={ConnexionForm} />
          <Route path="/Register" component={RegisterForm} />
          <Route path="/Lol" component={Lol} />
          <Route path="/Wow" component={Wow} />
          <Route path="/Search" component={Search} />
          <Route path="/Profil" component={Profil} />
          <Route path="/GamerStatistics" component={GamerStatistics} />
          <Route path="/Fav" component={Fav} />
          <Route path="/Admin" component={Admin} />
          <Route path="/quizz/:id" component={DisplayQuizz} />
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
