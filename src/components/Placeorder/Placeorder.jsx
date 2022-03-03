import React from 'react';
import { useParams } from 'react-router-dom';

const Placeorder = () => {
    const { placeorderId } = useParams();
    return (
        <div>
            <h1>this is placeorder detail page</h1>
        </div>
    );
};

export default Placeorder;