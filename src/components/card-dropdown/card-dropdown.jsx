import React from 'react';
import CustomButton from '../forms/custom-button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardItem from '../card-item/card-item';
import { hideAndShow } from '../../redux/card/card.actions';

const CardDropDown = ({ items, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                items.map(item => <CardItem item={item} key={item.id} />)
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(hideAndShow());
            history.push('/checkout');
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

export default withRouter(connect(({ card: { items } }) => ({ items }))(CardDropDown));