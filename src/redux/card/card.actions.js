import { card } from '../types';

export const hideAndShow = () => ({
    type: card.CHANGE_HIDDEN_STATE,
});

export const addItem = item => ({
    type: card.ADD_ITEM,
    payload: item,
});

export const remove = item => ({
    type: card.REMOVE,
    payload: item,
});

export const increment = item => ({
    type: card.INCREMENT,
    payload: item,
});

export const decrement = item => ({
    type: card.DECREMENT,
    payload: item,
})