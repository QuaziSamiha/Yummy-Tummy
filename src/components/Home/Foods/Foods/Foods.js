import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import jordaPolao from '../../../../images/food1.jpg';
import luchi from '../../../../images/food2.jpg';
import meat from '../../../../images/food3.jpg';
import cake from '../../../../images/food4.jpg';
import fish from '../../../../images/food5.jpg';
import biriyani from '../../../../images/food6.jpg';
import roll from '../../../../images/food7.jpg';
import laddu from '../../../../images/food8.jpg';
import './Foods.css';
import Food from '../Food/Food';

const allFoods = [
    {
        foodImg: jordaPolao,
        foodName: 'Jorda Polao',
        price: '50 tk'
    },
    {
        foodImg: luchi,
        foodName: 'Luchi Vaja',
        price: '15 tk per piece'
    },
    {
        foodImg: meat,
        foodName: 'Meat',
        price: '180 tk'
    },
    {
        foodImg: cake,
        foodName: 'Fruit Cake',
        price: '120 tk per pound'
    },
    {
        foodImg: fish,
        foodName: 'Fish Curry',
        price: '45 tk per piece'
    },
    {
        foodImg: biriyani,
        foodName: 'Biriyani',
        price: '120 tk per plate'
    },
    {
        foodImg: roll,
        foodName: 'Vegetable Roll',
        price: '25 tk per piece'
    },
    {
        foodImg: laddu,
        foodName: 'Laddu',
        price: '20 tk per piece'
    }
]

const Foods = () => {
    return (
        <section>
            <Navbar />
            {/* <h4>Experience</h4>
            <h2>DELICIOUS FOOD</h2> */}
            <div className='all-food'>
                <div className='row'>
                    {
                        allFoods.map((food, index) => <Food key={index} food={food} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Foods;