import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect( () =>{
        axios(`http://localhost:5000/services/${serviceId}`)
        .then( res =>{
            setService(res.data);
        })
    } ,[])
    return (
        <div>
            <h2>Details: {service.name}</h2>
            <h4>${service.price}</h4>
            <img src={service.img} alt="" />
        </div>
    );
};

export default Booking;