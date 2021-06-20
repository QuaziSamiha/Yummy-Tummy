import React from 'react';
import './HeaderMain.css';
import homeBG from '../../../images/homeBG3.jpg';

const HeaderMain = () => {
    return (
        <div className='main-header'>
            <div className='header-text'>
                <h1>FOODIE</h1>
                <h3>FEEL THE TASTE</h3>
                <h5>HEALTHY HOME MADE FOOD DELIVERY</h5>
            </div>
            <div className='header-img'>
                <img src={homeBG} alt=""  className='img-fluid'/>
            </div>
        </div>
    );
};

export default HeaderMain;