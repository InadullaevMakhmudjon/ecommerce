import React from 'react';
import { increment, decrement, remove } from '../../redux/card/card.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, dispatch }) => {
    const { imageUrl, name, quantity, price } = item;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(decrement(item))}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(increment(item))}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => dispatch(remove(item))}>&#10005;</span>
        </div>
    )
}

export default connect()(CheckoutItem);