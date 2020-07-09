import React from 'react';
import './App.scss';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start } from './pages/Start/Start';
import { Welcome } from './pages/Welcome/Welcome';
import { Welcome2 } from './pages/Welcome2/Welcome2';
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Start } from './pages/Start/Start';
import { Welcome } from './pages/Welcome/WelcomeComponents/WelcomeComponents';
import { ButtonComponent } from './shared/components/ButtonComponent'
>>>>>>> origin/Angel

function App() {
  return (
    <Router>
<<<<<<< HEAD
=======
      <nav>
        <ul>
          <li>
            <Link to="/start">Start</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/button">ButtonComponent</Link>
          </li>
        </ul>
      </nav>
>>>>>>> origin/Angel
      <Switch>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
<<<<<<< HEAD
        <Route path="/welcome2">
          <Welcome2></Welcome2>
=======
        <Route path="/button">
          <ButtonComponent title = "Hola que ase"/>
>>>>>>> origin/Angel
        </Route>
        <Route path="/">
          <Start></Start>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
