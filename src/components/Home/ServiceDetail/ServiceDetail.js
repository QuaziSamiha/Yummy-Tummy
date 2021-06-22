import React from 'react';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ serviceDetail }) => {
    return (
        <div className='col-xs-8 col-sm-6 col-md-4 col-lg-3'>
            <div className='single-service'>
                <h5>{serviceDetail.title}</h5>
                <img src={serviceDetail.img} alt="" className='img-fluid'/>
                <p>{serviceDetail.description}</p>
                <Link to='/foods'><button>See Menu</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;