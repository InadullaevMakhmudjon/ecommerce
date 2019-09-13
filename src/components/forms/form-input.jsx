import React from 'react';

export default ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>) : null
        }
    </div>
)