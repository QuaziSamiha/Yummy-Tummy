import React, { useEffect, useState } from 'react';
import './DeleteService.css';

const DeleteService = ({ service }) => {

    const [deleteService, setDeleteService] = useState(false);

    const handleDeleteService = (serviceId) => {
        // console.log(serviceId);
        fetch(`https://fathomless-temple-48746.herokuapp.com/deleteService/${serviceId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted successfully');
                setDeleteService(true);
            })
    }

    return (
        <div className='col-xs-8 col-sm-6 col-md-4 col-lg-3'>
            {
                deleteService === false ?
                    <div className='single-service'>
                        <h6>{service.serviceName}</h6>
                        <img src={service.serviceImage} alt="" className='img-fluid' />
                        <p>{service.serviceDescription}</p>
                        <button onClick={() => {
                            handleDeleteService(service._id)
                            setDeleteService(true);
                        }}>
                            Delete
                        </button>
                    </div>
                    :
                    <p>Deleted</p>
            }
        </div>
    );
};

export default DeleteService;