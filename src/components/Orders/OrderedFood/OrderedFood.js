import React from 'react';
import './OrderedFood.css';

const OrderedFood = ({ food }) => {
    return (
        <div className='food-item col-sm-6 col-lg-3'>
            <img src={food.foodImg} className='img-fluid' alt="" />
            <h6>{food.foodName}</h6>
            <p>Price: {food.price}</p>
            <button>Place Order</button>
        </div>
    );
};

export default OrderedFood;