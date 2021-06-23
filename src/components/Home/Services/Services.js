import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {

    const [serviceDetail, setServiceDetail] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-temple-48746.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                setServiceDetail(data);
            })
    }, [])

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