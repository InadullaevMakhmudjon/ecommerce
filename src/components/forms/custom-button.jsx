import React from 'react';

export default ({ children, inverse, ...otherProps }) => (
    <button className={`${inverse ? 'inverse' : ''} custom-button`} {...otherProps}>
        {
            children
        }
    </button>
)