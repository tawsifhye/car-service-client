import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/services')
        .then(res =>{
            console.log(res);
            setServices(res.data);
            // console.log(res.data[0]._id);
        })

        /* fetch('http://localhost:5000/services')
            .then(res =>{
                console.log(res); 
                res.json()})
            .then(data => {
                // console.log(data);
                setServices(data)}); */
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;