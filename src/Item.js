import React from 'react';
import './Item.css';

const Item = ({ title, amount }) => {
  return (
    <li className='item'>
      {title} <span>{amount}</span>
    </li>
  );
}

export default Item;
