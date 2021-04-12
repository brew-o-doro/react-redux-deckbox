import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer'
import { scratchpadsReducer } from './scratchpadsReducer'

export const rootReducer = combineReducers({
    scratchpads: scratchpadsReducer,
    cards: cardsReducer
})