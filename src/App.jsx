import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Start} from './pages/Start/Start';
import {Welcome} from './pages/Welcome/Welcome';
import {Welcome2} from './pages/Welcome2/Welcome2';
import {Rates} from './pages/Rates/Rates';
import {Login} from './pages/Login/Login';
import BottomNav from './shared/components/NavBar/NavBar';
import {Register} from './pages/Register/Register';
import {Home} from './pages/Home/Home'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Home">
                    <Home/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/rates">
                    <Rates/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/welcome">
                    <Welcome/>
                </Route>
                <Route path="/welcome2">
                    <Welcome2/>
                </Route>
                <Route path="/">
                    <Start/>
                </Route>
                <Route path="/">
                    <BottomNav/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
