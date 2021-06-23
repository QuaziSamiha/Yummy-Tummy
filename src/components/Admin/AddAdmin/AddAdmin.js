import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Shared/Navbar/Navbar';
import './AddAdmin.css';

const AddAdmin = () => {

    const [addAdmin, setAddAdmin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data);

        fetch('https://fathomless-temple-48746.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log(res))
    };

    return (
        <div>
            <Navbar />
            <div className='add-admin'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {addAdmin === true ? <p style={{ color: 'darkslategrey', fontFamily: 'cursive', textAlign: 'center' }}>New Admin Added Successfully</p> : <span></span>}

                    <input type="text" placeholder='Enter New Admin Email' {...register("email", { required: true })} className='form-control'></input>
                    {errors.email && <span>This field is required</span>}
                    <br /> <input type="submit" value="Add New Admin" className='admin-btn' onClick={() => setAddAdmin(true)} />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;