import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import Story from '../Story/Story';
import Employees from '../Employees/Employees';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <Reviews />
            
            <Story />
            <Employees />
            <Footer />
        </div>
    );
};

export default Home;