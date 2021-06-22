import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const DashBoard = () => {
    return (
        <div>
            <Navbar />
            <section style={{ marginTop: '100px' }}>
                <div>
                    <Sidebar />
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default DashBoard;