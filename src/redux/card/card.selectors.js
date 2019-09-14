import { createSelector } from 'reselect';

const getCart = state => state.card;

export const cardItems = createSelector(
    getCart,
    cart => cart.items,
)

export const cardTotal = createSelector(
    getCart,
    cart => cart.items.reduce((a, b) => a + b.quantity * b.price, 0),
)

export const cardItemsCount = createSelector(
    getCart,
    cart => cart.items.reduce((a, b) => a + b.quantity, 0),
)