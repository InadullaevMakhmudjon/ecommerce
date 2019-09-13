import React from 'react';
import CustomButton from '../forms/custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/card/card.actions';

const Collection = ({ title, items, addItemToCard }) => (
    <div className="collection-preview">
        <h1>{title}</h1>
        <div className="collection-items">
            {
                items.filter((_, index) => index < 4).map(item => (
                    <div key={item.id} className="collection-item" onClick={() => addItemToCard(item)}>
                        <div className="image" style={{
                            backgroundImage: `url(${item.imageUrl})`,
                        }}>
                            <CustomButton inverse>Add to card</CustomButton>
                        </div>
                        <div className="collection-item-footer">
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

const mapToDispatches = dispatch => ({
    addItemToCard: item => dispatch(addItem(item)),
})

export default connect(null, mapToDispatches)(Collection);