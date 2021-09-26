import ReactDOM from 'react-dom';
import React from 'react';
import Login from './components/Login/Login.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route path='/' component={Home}></Route>
        </Switch>
    </Router>,
    document.getElementById("app")
);
