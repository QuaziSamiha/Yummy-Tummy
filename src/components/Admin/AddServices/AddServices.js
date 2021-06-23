import React, { useState } from 'react';
import './AddServices.css';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddServices = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [addService, setAddService] = useState(false);

    const onSubmit = data => {
        const serviceDetail = {
            serviceName: data.serviceName,
            serviceDescription: data.description,
            serviceImage: imageURL
        }

        fetch('https://fathomless-temple-48746.herokuapp.com/addNewService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceDetail)
        })
            .then(res => console.log('server side response'))

    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '9ab2328cdf5063bfa594a8f1d0a27125');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Navbar />
            <div className='add-service'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {addService === true ? <p style={{ color: 'darkslategrey', fontFamily: 'cursive', textAlign: 'center' }}>Service Added Successfully</p> : <span></span>}

                    <input type="text" {...register("serviceName", { required: true })} className='form-control' placeholder='Service Name' />
                    {errors.serviceName && <span>This field is required</span>}
                    <textarea cols="30" rows="5" {...register("description", { required: true })} className='form-control' placeholder='Service Detail...'></textarea>
                    {errors.description && <span>This field is required</span>}
                    <br /><label style={{ color: 'grey' }}>Add Image</label>
                    <input type="file" {...register("foodImage", { required: true })} className='form-control' onChange={handleImageUpload} />
                    <input type="submit" value="Add Service" className='add-btn' onClick={() => setAddService(true)} />
                </form>
            </div>
        </div>
    );
};

export default AddServices;