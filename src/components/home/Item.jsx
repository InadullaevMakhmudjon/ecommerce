import React from 'react';
import { withRouter } from 'react-router-dom';
const Item = ({ size, imageUrl, title, subtitle, linkUrl, history }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
            {
                console.log(imageUrl)
            }
            <div className="backgroundImage" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    )
}

export default withRouter(Item);
