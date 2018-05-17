import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Route path="/login" component={Login} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/home" component={Main} />
            <Route path="/profile" component={ProfileUser} />
            <Route path="/mescoupsdecoeur" component={Favoris} />
        </div>

    </Router>


}


export default routes;