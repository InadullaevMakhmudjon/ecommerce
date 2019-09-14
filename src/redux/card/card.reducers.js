import { card } from '../types';
import { addToCard, decrement } from '../utils';

const initialState = {
    hidden: true,
    items: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case card.CHANGE_HIDDEN_STATE:
            return {
                ...state,
                hidden: !state.hidden
            }
        case card.ADD_ITEM:
            return {
                ...state,
                items: addToCard(state.items, action.payload),
            }
        case card.REMOVE:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            }
        case card.INCREMENT:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1} : item),
            }
        case card.DECREMENT:
            return {
                ...state,
                items: decrement(state.items, action.payload),
            }
        default:
            return state;
    }
}