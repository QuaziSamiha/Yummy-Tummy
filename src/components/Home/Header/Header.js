import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div className='all-header'>
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;