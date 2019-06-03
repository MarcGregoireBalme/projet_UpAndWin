import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Redux/Store';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Provider store={Store}>
          <Route exact path="/" component={Home} />
          <Route path="/form/" component={Form} />
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
