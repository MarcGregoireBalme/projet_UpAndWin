import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Redux/Store';
import Form from './Components/Form';
import Lol from './Pages/Lol';
import Wow from './Pages/Wow';
import Search from './Pages/Search';
import Profil from './Pages/Profil';

function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={Store}>
          <Route exact path="/" component={Home} />
          <Route path="/form/" component={Form} />
          <Route path="/Lol" component={Lol} />
          <Route path="/Wow" component={Wow} />
          <Route path="/Search" component={Search} />
          <Route path="/Profil" component={Profil} />
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
