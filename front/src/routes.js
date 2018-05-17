import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import Home from './componentsMain/Home';
import Login from './componentsMain/Login';
import Inscription from './componentsMain/Inscription';
import Main from './componentsMain/Main';
import ProfileUser from './componentsMain/ProfileUser';
import Favoris from './componentsMain/Favoris';

const routes = () => {
    return <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/inscription" component={Inscription} />
            <Route exact path="/home" component={Main} />
            <Route exact path="/profile" component={ProfileUser} />
            <Route exact path="/mescoupsdecoeur" component={Favoris} />
        </div>
    </Router>
}


export default routes;