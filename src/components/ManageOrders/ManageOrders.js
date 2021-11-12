import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import Order from '../MyOrders/Order';

const ManageOrders = () => {
    const history = useHistory();
    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch(`https://fierce-stream-76802.herokuapp.com/manage-orders/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            });
    })
    console.log(orders)
    const handleDelete = id => {
        const url = `https://fierce-stream-76802.herokuapp.com/placeorder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (window.confirm("Are you sure?")) {
                    if (data.deletedCount) {
                        alert("Order cancelled successfully!")
                        const remaining = Object.entries(orders).filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                }
            })
    }
    const handleUpdate = id => {
        history.push(`/update-order/${id}`)
    }

    const all_orders = Object.entries(orders).map(order => <Order order={order} key={order._id} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
    return (
        <div>
            {all_orders.length === 0 ? <h1>No order submitted yet</h1> : all_orders}
        </div>
    )
}

export default ManageOrders
