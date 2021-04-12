import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/cardsActions';
// import CardForm from '../components/CardForm'


class CardsContainer extends Component {
    componentDidMount() {
        this.props.fetchCards()
    }
    render() {        
        return (
            <div>
                Cards Container
                {/* <CardForm /> */}
            </div>
        )
    }
}

export default connect(null, { fetchCards })(CardsContainer);