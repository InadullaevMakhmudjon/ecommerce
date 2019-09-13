import React from 'react';
import CustomButton from '../forms/custom-button';
import { connect } from 'react-redux';
import CardItem from '../card-item/card-item';

const CardDropDown = ({ items }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                items.map(item => <CardItem item={item} key={item.id} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default connect(({ card: { items } }) => ({ items }))(CardDropDown);