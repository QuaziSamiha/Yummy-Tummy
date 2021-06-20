import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';
import frozenFood from '../../../images/frozen-food.png';
import regularFood from '../../../images/regular-food.jpg';
import seasonalFood from '../../../images/seasonal-food.jpg';
import specialFood from '../../../images/special-food.jpg';

const serviceDetail = [
    {
        title: 'Frozen Food',
        description: 'We deliver frozen ready food to save your time.',
        img: frozenFood
    },
    {
        title: 'Regular Cooked Food',
        description: 'These food items are available everyday in our menu.',
        img: regularFood
    },
    {
        title: 'Seasonal Food',
        description: 'You can enjoy seasonal food according to present season',
        img: seasonalFood
    },
    {
        title: 'Special Order Food',
        description: 'These food are not available everyday but if you order we can ready them for you according to your need.',
        img: specialFood
    },
]

const Services = () => {
    return (
        <section className='all-services text-center row'>
            <h3>Our Services</h3>
            <h1>YOU ORDER, WE DELIVER</h1>
            {
                serviceDetail.map((service, index) => <ServiceDetail key={index} serviceDetail={service}></ServiceDetail>)
            }
        </section>
    );
};

export default Services;