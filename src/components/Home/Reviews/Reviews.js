import React, { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Reviews = () => {

    const [allReview, setAllReview] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-temple-48746.herokuapp.com/customerReviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllReview(data);
            })
    }, [])

    // console.log(allReview);
    return (
        <section className='all-reviews'>
                <h4>Reviews</h4>
                <h1>HAPPY CUSTOMERS</h1>
                <div className='row reviews'>
                    {
                        allReview.map((review, index) => <ReviewDetail key={index} reviewDetail={review} />)
                    }
                </div>
        </section>
    );
};

export default Reviews;