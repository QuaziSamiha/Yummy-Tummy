import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './DisplayCustomerDetail.css';

const DisplayCustomerDetail = () => {

    const [allCustomerDetail, setAllCustomerDetail] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/customerDetail')
            .then(res => res.json())
            .then(data => {
                setAllCustomerDetail(data);
            })
    }, [])

    console.log(allCustomerDetail);
    return (
        <div>
            <Navbar />
            <div style={{ margin: '150px' }}>
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th scope='col'>Customer Name</th>
                            <th scope='col'>Customer Email</th>
                            <th scope='col'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCustomerDetail.map((customerDetail, index) =>
                                <tr>
                                    <td>{customerDetail.foodName}</td>
                                    <td>{customerDetail.userName}</td>
                                    <td>{customerDetail.email}</td>
                                    <td>{customerDetail.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default DisplayCustomerDetail;