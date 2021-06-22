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
        fetch(`http://localhost:5050/customerOrderList?email=${loggedInUser.email}`)
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
                            <h3 style={{ color: 'darkslategrey', textAlign: 'center' }}>Your Orders</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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