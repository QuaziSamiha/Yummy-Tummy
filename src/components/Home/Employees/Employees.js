import React from 'react';
import './Employees.css';
import takingOrder from '../../../images/taking-order.jpg';
import cookingFood from '../../../images/chef.jpg';
import packaging from '../../../images/packaging.jpg';
import onWay from '../../../images/delivery-man.jpg';
import deliver from '../../../images/delivery-man2.jpg';
import ActivityEmployee from '../ActivityEmployee/ActivityEmployee';

const details = [
    {
        title: 'Taking Order',
        img: takingOrder,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae alias labore repellendus earum, hic impedit.'
    },
    {
        title: 'Cooking Food',
        img: cookingFood,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae alias labore repellendus earum, hic impedit.'
    },
    {
        title: 'Packaging',
        img: packaging,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae alias labore repellendus earum, hic impedit.'
    },
    {
        title: 'On The Way',
        img: onWay,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae alias labore repellendus earum, hic impedit.'
    },
    {
        title: 'Deliver to Customer',
        img: deliver,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae alias labore repellendus earum, hic impedit.'
    },
]

const Employees = () => {
    return (
        <section className='activity-professionals text-center row'>
            <h2>Our Activity and Professionals</h2>
                {
                    details.map((detail, index) => <ActivityEmployee key={index} detail={detail} />)
                }
        </section>
    );
};

export default Employees;