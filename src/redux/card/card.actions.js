import { card } from '../types';

export const hideAndShow = () => ({
    type: card.CHANGE_HIDDEN_STATE,
})

export const addItem = item => ({
    type: card.ADD_ITEM,
    payload: item,
})