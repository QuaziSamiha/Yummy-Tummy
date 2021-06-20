import React from 'react';
import './ActivityEmployee.css';

const ActivityEmployee = ({ detail }) => {
    return (
        <div className='col-xs-8 col-sm-6 col-md-4 col-lg-3 detail-info'>
            <h5>{detail.title}</h5>
            <img src={detail.img} className='img-fluid' alt="" />
            <p><small>{detail.description}</small></p>
        </div>
    );
};

export default ActivityEmployee;