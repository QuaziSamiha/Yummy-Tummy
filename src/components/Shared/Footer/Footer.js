import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faClock, faHeart, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <section className='footer-all m-5 p-5 row'>
            <div className='col-xs-6 col-sm-6 col-md-2 col-lg-2 footer-part'>
                <FontAwesomeIcon icon={faMapMarker} className='footer-icon' />
                <h6>ADDRESS</h6>
                <p>108/3,Upashahar,Rajshahi</p>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-2 col-lg-2 footer-part'>
                <FontAwesomeIcon icon={faClock} className='footer-icon' />
                <h6>WE ARE OPEN</h6>
                <p><b>Sat-Thus:</b> 11am-10pm</p>
                <p><b>Fri:</b>3pm-10pm</p>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-2 col-lg-2 footer-part'>
                <FontAwesomeIcon icon={faPhone} className='footer-icon' />
                <h6>CONTACT</h6>
                <p>+08801729055115</p>
                <p>help@gmail.com</p>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-2 col-lg-2 footer-part'>
                <FontAwesomeIcon icon={faHeart} className='footer-icon' />
                <h6>STAY CONNECTED</h6>
                <div>
                    <FontAwesomeIcon icon={faFacebook} className='footer-icon' />
                    <FontAwesomeIcon icon={faYoutubeSquare} className='footer-icon' />
                    <FontAwesomeIcon icon={faInstagram} className='footer-icon' />
                </div>
            </div>
        </section>
    );
};

export default Footer;