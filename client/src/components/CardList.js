import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react'


const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => 
            <ul>
                <li key={card.id}>{card.name} - {card.quantity} - {card.card_type}</li>
                <Image id="card-image" src={card.image} alt={card.name} size='small'/>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList);