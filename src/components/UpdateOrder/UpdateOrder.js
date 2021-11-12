import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import Order from '../UpdateOrder/Order';

const UpdateOrder = () => {
    const { _id } = useParams();
    const history = useHistory();
    const [order, setOrder] = useState({});
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        fetch(`https://fierce-stream-76802.herokuapp.com/placeorder/${_id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            });
    })
    const formHandler = e => {
        e.preventDefault();
        const updated_data = {
            status:e.target["status"].value
        }
        console.log(updated_data)
        fetch(`https://fierce-stream-76802.herokuapp.com/placeorder/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updated_data)
                
        })
        .then(res => {
            window.alert("Status Updated Successfully")
            e.target["status"].value = '';
            })
    }
    return (
        <div>
            {<Order order={order}/>}
            <div className="bg-green-100 w-1/2 mx-auto my-10 py-10 rounded-2xl">
                <h1 className="mb-3">Update Order</h1>
                 <form onSubmit={formHandler}>
                <label htmlFor="status" className="">Status</label><br />
                    <input type="text" name="status" className="px-3 py-2 outline-none rounded-xl"/>
                    <br />
                <input type="submit" value="Update Status" className="bg-green-600 text-white px-3 py-2 rounded-xl mt-1"/>
            </form>
           </div>
        </div>
    )
}

export default UpdateOrder
