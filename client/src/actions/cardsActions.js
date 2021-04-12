export const fetchCards = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(cards => dispatch({type: 'FETCH_CARDS', payload: cards}))
    }
}

export const addCard = card => {
    return dispatch => {
        fetch('http://localhost:3000/cards', {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {'Content-Type': 'application/json'}
    })  
    .then(res => res.json())
    .then(card => dispatch({type: 'ADD_CARD', payload: card}))
    }
}   
