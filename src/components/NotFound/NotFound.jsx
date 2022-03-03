import React from 'react';
import notf from '../../Assets/images/error.png'
import Navbar from '../Shared/Navbar';

const NotFound = () => {
    return (
        <>
        <Navbar/>
        <div>

            <img src={notf} alt="ddtg" />
        </div>
        </>
    );
};

export default NotFound;