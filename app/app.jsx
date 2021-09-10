import ReactDOM from 'react-dom';
import React from 'react';
import Login from './components/Login/Login.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/login' component={Login}></Route>
            {/* <Route path='/'> </Route> */}
        </Switch>
    </Router>,
    document.getElementById("app")
);
