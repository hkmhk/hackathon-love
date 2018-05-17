import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

import Home from './components/Home';

const routes = () => {
        return <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
}


export default routes;