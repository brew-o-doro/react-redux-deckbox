import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react'


const CardList = ({ cards }) => {
    return (
        <div>
          <Card  raised image='src' fluid={true}>
            {cards.map((card) =>
              <Card.Content textAlign='center'>
                <>
                  <Image id="card-image"  src={card.image} alt={card.name} wrapped-ui={false} size='medium'/>
                   <Card.Header key={card.id}>{card.name}</Card.Header>

                    <Card.Meta>Quantity: {card.quantity}</Card.Meta>
                    <Card.Description>Card Type: {card.card_type}</Card.Description>
                 </>
              </Card.Content>
            )}
            </Card>
        </div>

    )
}

const mapStateToProps = state => {
    return { cards: state.cards }
}

export default connect(mapStateToProps)(CardList);
//
// import { Card, Icon, Image } from 'semantic-ui-react'

// const CardExampleCard = () => (
//   <Card>
//     <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
// )
//
// export default CardExampleCard
