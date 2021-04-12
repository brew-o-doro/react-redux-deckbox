export const fetchScratchpads = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/scratchpads')
        .then(res => res.json())
        .then(scratchpads => dispatch({type: 'FETCH_SCRATCHPAD', payload: scratchpads}))
    }
}

export const addScratchpad = scratchpad => {
    return dispatch => {
        fetch('http://localhost:3000/scratchpads', {
        method: 'POST',
        body: JSON.stringify(scratchpad),
        headers: {'Content-Type': 'application/json'}
    })  
    .then(res => res.json())
    .then(scratchpad => dispatch({type: 'ADD_SCRATCHPAD', payload: scratchpad}))
    }
}   
