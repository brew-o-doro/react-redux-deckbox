export const scratchpadsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SCRATCHPAD': 
            return action.payload
            case 'ADD_SCRATCHPAD':
                return [...state, action.payload]
        default:
            return state
    }
}