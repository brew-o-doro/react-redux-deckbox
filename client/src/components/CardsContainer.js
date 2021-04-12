import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/cardsActions'

class CardsContainer extends Component {
    componentDidMount() {
        this.props.fetchCards()
    }
    render() {        
        return (
            <div>
                Cards Container
            </div>
        )
    }
}

export default connect(null, { fetchCards })(CardsContainer);