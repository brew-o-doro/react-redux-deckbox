import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from '../components/Home';
import CardList from '../components/CardList';
import About from '../components/About';
import AddCard from '../components/AddCard';
import ScratchpadsContainer from '../components/ScratchpadsContainer';

const Router = () => {
    return (
       
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/cards" component={CardList}/>
            <Route path="/add-cards" component={AddCard}/>
            <Route path="/scratchpads" component={ScratchpadsContainer}/>
        </Switch>
    )
}

export default Router;