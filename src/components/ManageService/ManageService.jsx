import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])
    return (
        <div>
            
        </div>
    );
};

export default ManageService;