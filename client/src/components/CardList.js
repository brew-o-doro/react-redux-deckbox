import React from 'react';
import { connect } from 'react-redux';

import CardsContainer from '../components/CardsContainer'

const CardList = ({ cards }) => {
    return (
        <div>
            <CardsContainer />
            {cards.map((card) => 
            <ul>
                <li key={card.id}>{card.name} - {card.quantity} - {card.card_type}</li>
                <img id="card-image" src={card.image} alt={card.name}></img>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList);