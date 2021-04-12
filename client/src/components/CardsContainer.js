import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/cardsActions';
import CardForm from '../components/CardForm'
import CardList from '../components/CardList'


class CardsContainer extends Component {
    componentDidMount() {
        this.props.fetchCards()
    }
    render() {        
        return (
            <div>
                <h1>Welcome to Your Deckbox!</h1>
                <CardForm />
                <CardList />
            </div>
        )
    }
}

export default connect(null, { fetchCards })(CardsContainer);