import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start } from './pages/Start/Start';
import { Welcome } from './pages/Welcome/Welcome';
import { Welcome2 } from './pages/Welcome2/Welcome2';
import { Rates } from './pages/Rates/Rates';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rates">
          <Rates></Rates>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/welcome2">
          <Welcome2></Welcome2>
        </Route>
        <Route path="/">
          <Start></Start>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
