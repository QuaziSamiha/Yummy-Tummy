import React from 'react';
import './OrderedFood.css';

const OrderedFood = ({ food }) => {
    return (
        <div className='food-item'>
            <img src={food.foodImg} className='img-fluid' alt="" />
            <h6>{food.foodName}</h6>
            <p>Price: {food.price}</p>
        </div>
    );
};

export default OrderedFood;