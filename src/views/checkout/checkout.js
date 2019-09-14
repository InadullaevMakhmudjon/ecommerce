import React from 'react';
import CheckoutItem from '../../components/cheackout/checkout-item';
import { connect } from 'react-redux';
import { cardItems, cardTotal } from '../../redux/card/card.selectors';
import { createStructuredSelector } from 'reselect';

class Checkout extends React.Component {
    render() {
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    this.props.cardItems.map(item => (
                        <CheckoutItem key={item.id} item={item}></CheckoutItem>
                    ))
                }
                <div className='total'>Total: { this.props.cardTotal }$</div>
            </div>
        )
    }
}

const mapToProps = createStructuredSelector({
    cardItems,
    cardTotal,
});

export default connect(mapToProps)(Checkout);