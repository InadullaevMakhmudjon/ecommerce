import { card } from '../types';
import { addToCard } from '../utils';

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
        default:
            return state;
    }
}