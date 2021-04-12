import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home';
import CardsContainer from '../components/CardsContainer';
import About from '../components/About';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/cards" component={CardsContainer}/>
        </Switch>
    )
}

export default Router;