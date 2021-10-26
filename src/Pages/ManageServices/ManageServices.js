import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/services')
        .then(res =>{
            // console.log(res);
            setServices(res.data);
        })
    }, [])

     //DELETE AN USER
     const handleDeleteUser = id =>{
        const proceed = window.confirm ("Are you sure you want to delete?")
        if(proceed){
            const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0)
            alert("deleted successfully");
            const remainingUsers = services.filter(user => user._id !== id)
            setServices(remainingUsers);
        })
        }
        
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=> handleDeleteUser(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;