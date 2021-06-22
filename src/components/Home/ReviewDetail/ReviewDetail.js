import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = ({ reviewDetail }) => {
    return (
        <div className='col-sm-6 col-md-3 col-lg-2 customer-review'>
            <p>"{reviewDetail.review}"</p>
            <h6>{reviewDetail.customerName}</h6>
        </div>
    );
};

export default ReviewDetail;
//