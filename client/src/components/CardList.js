import React from 'react';
import { connect } from 'react-redux';

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => <ul><li key={card.id}>{card.name} - {card.quantity} - {card.card_type}- {card.image} </li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList);