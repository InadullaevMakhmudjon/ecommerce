import React from 'react';
import Item from './Item';

export default ({ data }) => (
  <div className="directory-menu">
    {
      data.map((el, index) => (
        <Item
          key={index}
          {...el} />
      ))
    }
  </div>
)