import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light nav-brand fixed-top'>
                <div className="container pt-3">
                    <h3 className='navbar-brand nav-logo text-white'>YUMMY TUMMY</h3>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <div className='navbar-nav'>
                            <Link className='nav-link m-2 link-brand' to="/home"><span id='home-span'>Home</span></Link>
                            <Link className='nav-link m-2 link-brand' to="/checkOut"><span>Orders</span></Link>
                            <Link className='nav-link m-2 link-brand' to="/admin"><span>Admin</span></Link>
                            <Link className='nav-link m-2 link-brand' to='/login'><span>Login</span></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;