import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = ({ reviewDetail }) => {
    return (
        <div className='col-xs-8 col-sm-6 col-md-4 col-lg-4'>
            <div className='customer-review'>
                <img src={reviewDetail.img} alt="" className='img-fluid'/>
                <p>"{reviewDetail.description}"</p>
                <h6>{reviewDetail.name}</h6>
            </div>
        </div>
    );
};

export default ReviewDetail;