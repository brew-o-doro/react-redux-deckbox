export const fetchCards = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(cards => dispatch({type: 'FETCH_CARDS', payload: cards}))
    }
}