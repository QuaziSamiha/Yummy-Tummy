import React from 'react';
import './Reviews.css';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import Story from '../Story/Story';
import Employees from '../Employees/Employees';
import Footer from '../../Shared/Footer/Footer';

const allReview = [
    {
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vel ratione. In quasi assumenda, officia corrupti corporis aliquid sequi voluptatum minima itaque nesciunt facere quae?',
        name: 'Samiha Tasnim'
    },
    {
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vel ratione. In quasi assumenda, officia corrupti corporis aliquid sequi voluptatum minima itaque nesciunt facere quae?',
        name: 'Asma Begum'
    },
    {
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vel ratione. In quasi assumenda, officia corrupti corporis aliquid sequi voluptatum minima itaque nesciunt facere quae?',
        name: 'Vondul Vai'
    }
]

const Reviews = () => {
    return (
        <section className='all-reviews row'>
            <h4>Reviews</h4>
            <h1>HAPPY CUSTOMERS</h1>
            {
                allReview.map((review, index) => <ReviewDetail key={index} reviewDetail={review} />)
            }

            <Story />
            <Employees />
            <Footer />
        </section>
    );
};

export default Reviews;