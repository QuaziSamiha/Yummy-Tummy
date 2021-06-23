import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import DeleteService from '../DeleteService/DeleteService';
import './ManageService.css';

const ManageService = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-temple-48746.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, [])

    return (
        <div>
            <Navbar />
            <div className='manage-service row'>
                {
                    allServices.map((service, index) => <DeleteService key={index} service={service}/>)
                }
            </div>
        </div>
    );
};

export default ManageService;