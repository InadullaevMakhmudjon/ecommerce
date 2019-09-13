import React from 'react';

export default ({ item: { name, imageUrl, price, quantity } }) => (
    <div className='cart-item'>
        <img alt='Item' src={imageUrl}></img>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
) 