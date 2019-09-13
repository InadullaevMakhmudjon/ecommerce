import React from 'react';
import SHOP_DATA from '../../data/shop.data.js';
import Collection from '../../components/shop/Collection-preview';

export default class extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data : SHOP_DATA,
        }
    }

    render() {
        return (
            <div className="shop-page">
            {
                this.state.data.map(({ id, title, items }) => (
                    <Collection key={id} title={title} items={items}>
                    </Collection>
                ))
            }
            </div>
        )
    }
}