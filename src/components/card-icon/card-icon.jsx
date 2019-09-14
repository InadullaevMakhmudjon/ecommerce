import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { cardItemsCount } from '../../redux/card/card.selectors';
import { hideAndShow } from '../../redux/card/card.actions';

const Card = ({ hideAndShow, quantity }) => (
    <div className='cart-icon' onClick={hideAndShow}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{quantity}</span>
    </div>
)

const mapToDispatches = dispatch => ({
    hideAndShow: () => dispatch(hideAndShow()),
})

export default connect(state => ({ quantity: cardItemsCount(state) }), mapToDispatches)(Card);
