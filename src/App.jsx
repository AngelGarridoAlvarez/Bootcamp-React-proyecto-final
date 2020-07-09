import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start } from './pages/Start/Start';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/welcome">
          <Welcome></Welcome>
        </Route> */}
        <Route path="/">
          <Start></Start>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
