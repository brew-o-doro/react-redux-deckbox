import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from '../components/Home';
import About from '../components/About';
import ScratchpadsContainer from '../components/ScratchpadsContainer';
import CardsContainer from '../components/CardsContainer';

const Router = () => {
    return (
       
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/cards" component={CardsContainer}/>
            <Route path="/scratchpads" component={ScratchpadsContainer}/>
            <Route path="/about" component={About}/>
        </Switch>
    )
}

export default Router;