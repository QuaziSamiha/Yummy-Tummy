import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import './Food.css';

const Food = ({ food }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBuyNow = (orderedFood, customer) => {

        const orderedDetail = { ...orderedFood, ...customer };

        fetch('http://localhost:5050/addFoodOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedDetail)
        })
            .then(res => res.json())
            .then(success => {
                if(success) {
                    alert('food added to your purchase list')
                }
            })
    }

    return (
        <div className='col-sm-6 col-md-4 col-lg-2 food-item'>
            <img src={food.foodImg} className='img-fluid' alt="" />
            <h6>{food.foodName}</h6>
            <p>Price: {food.price}</p>
            <button onClick={() => handleBuyNow(food, loggedInUser)}>Buy Now</button>
        </div>
    );
};

export default Food;