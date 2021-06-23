import React, { useContext, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import './Review.css';
import { UserContext } from '../../../App';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [postReview, setPostReview] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.customerName = loggedInUser.userName;
        // console.log(data);
        setPostReview(true);

        fetch('https://fathomless-temple-48746.herokuapp.com/postReview', {
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
            <div className='customer-review'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea defaultValue='Testy food' cols="30" rows="10" {...register("review", { required: true })} className='form-control'></textarea>
                    {errors.review && <span>This field is required</span>}
                    <br /> <input type="submit" value="Post Review" className='review-btn' />

                    {
                        postReview === true ? <h5>Thanks for Your Review</h5> : <span></span>
                    }
                </form>
            </div>
        </div>
    );
};

export default Review;


// <input defaultValue="test" {...register("example")} />

// <input {...register("exampleRequired", { required: true })} />
// {errors.exampleRequired && <span>This field is required</span>}