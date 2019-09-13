import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { hideAndShow } from '../../redux/card/card.actions';

const Card = ({ hideAndShow, items }) => (
    <div className='cart-icon' onClick={hideAndShow}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{items.reduce((a, b) => a + b.quantity, 0)}</span>
    </div>
)

const mapToDispatches = dispatch => ({
    hideAndShow: () => dispatch(hideAndShow()),
})

export default connect(({ card: { items } }) => ({ items }), mapToDispatches)(Card);
