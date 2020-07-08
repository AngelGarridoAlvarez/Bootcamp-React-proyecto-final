import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Start } from './pages/Start/Start';
import { Welcome } from './pages/Welcome/WelcomeComponents/WelcomeComponents';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/start">Start</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/">
          <Start></Start>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
