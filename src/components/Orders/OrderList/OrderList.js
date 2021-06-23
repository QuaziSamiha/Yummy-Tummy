import React, { useContext, useEffect, useState } from 'react';
import './OrderList.css';
import Navbar from '../../Shared/Navbar/Navbar';
import { UserContext } from '../../../App';
import OrderedFood from '../OrderedFood/OrderedFood';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch(`https://fathomless-temple-48746.herokuapp.com/customerOrderList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderList(data);
            })
    }, [])
    console.log(orderList);
    return (
        <section>
            <Navbar />
            <div style={{ margin: '100px' }}>
                {
                    orderList.length > 0 ?
                        <div>
                            <h3 style={{ color: 'darkslategrey', textAlign: 'center', margin:'30px', fontWeight: 'bolder'}}>Your Cart</h3>
                            <div className='row'>
                                {
                                    orderList.map((food, index) => <OrderedFood key={index} food={food} />)
                                }
                            </div>
                        </div>
                        :
                        <h3>You Didn't Order Any Food</h3>
                }
            </div>
        </section>
    );
};

export default Orders;