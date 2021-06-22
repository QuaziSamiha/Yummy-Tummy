import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import list from '../../../images/list.png';
import add from '../../../images/add.png';
import manage from '../../../images/edit.png';
import review from '../../../images/preview.jpg';
import placeOrder from '../../../images/place-order.png';

const Sidebar = () => {
    return (
        <aside className='order-manage'>
            <Link className='nav-link'>
                <button className='customer-status'><img src={placeOrder} alt="" /> Place Order</button>
            </Link>
            <Link to='orderList' className='nav-link'>
                <button className='customer-status'><img src={list} alt="" /> Your Cart</button>
            </Link>
            <Link to='/review' className='nav-link'>
                <button className='customer-status'><img src={review} alt="" /> Review</button>
            </Link>
            <Link className='nav-link'>
                <button className='customer-status'><img src={list} alt="" /> All Orders</button>
            </Link>
            <Link to='/addService' className='nav-link'>
                <button className='customer-status'><img src={add} alt="" /> Add Service</button>
            </Link>
            <Link className='nav-link'>
                <button className='customer-status'><img src={add} alt="" /> Add Admin</button>
            </Link>
            <Link className='nav-link'>
                <button className='customer-status'><img src={manage} alt="" /> Manage Service</button>
            </Link>
        </aside>
    );
};

export default Sidebar;