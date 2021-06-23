import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import list from '../../../images/list.png';
import add from '../../../images/add.png';
import manage from '../../../images/edit.png';
import review from '../../../images/preview.jpg';
import placeOrder from '../../../images/place-order.png';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5050/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data);
            })
    }, [])

    return (
        <aside className='order-manage'>
            {
                isAdmin === false ?
                    <div>
                        <Link className='nav-link'>
                            <button className='customer-status'><img src={placeOrder} alt="" /> Place Order</button>
                        </Link>
                        <Link to='orderList' className='nav-link'>
                            <button className='customer-status'><img src={list} alt="" /> Your Cart</button>
                        </Link>
                        <Link to='/review' className='nav-link'>
                            <button className='customer-status'><img src={review} alt="" /> Review</button>
                        </Link>

                    </div>
                    :
                    <div>
                        <Link to='/allCustomerOrder' className='nav-link'>
                            <button className='customer-status'><img src={list} alt="" /> All Orders</button>
                        </Link>
                        <Link to='/addService' className='nav-link'>
                            <button className='customer-status'><img src={add} alt="" /> Add Service</button>
                        </Link>
                        <Link to='/addAdmin' className='nav-link'>
                            <button className='customer-status'><img src={add} alt="" /> Add Admin</button>
                        </Link>
                        <Link className='nav-link'>
                            <button className='customer-status'><img src={manage} alt="" /> Manage Service</button>
                        </Link>
                    </div>
            }
        </aside>
    );
};

export default Sidebar;

// programminghero001@gmail.com 
