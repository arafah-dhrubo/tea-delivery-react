import React, { useState, useEffect } from 'react'
import Items from './Items';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://fierce-stream-76802.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const service = services.map(service => <Items service={service} key={service.id} />)
    return (
        <div className="py-20 bg-green-50" id="products">
            <div className="container mx-auto">
                <h3>Popular Products</h3>
                <div className="d-flex justify-content mx-auto align-items-center row row-cols-1 row-cols-md-3 g-5 mt-1">
                    {service}
                </div></div>
        </div>
    )
}

export default Services
