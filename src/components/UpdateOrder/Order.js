import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

const Order = (props) => {
    const { _id, product_id, phone, address, total, status } = props.order;
    
    // custom hook to get the current pathname in React
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    const { handleDelete, handleUpdate } = props;
    return (
        <div className="col">
            <div className="bg-green-50 m-1 p-2 rounded-md w-1/2 mx-auto p-5 rounded-xl">
                <table className="table">
                    <tr>
                        <th>Order ID:</th>
                        <td>{_id}</td>
</tr>
                    <tr>
                        <th>Product ID:</th>
                        <td>{product_id}</td>
</tr>
                    <tr>
                        <th>Phone No:</th>
                        <td>{phone}</td>
</tr>
                    <tr>
                        <th>Shipping Address</th>
                        <td>{address}</td>
</tr>
                    <tr>
                        <th>Total Price</th>
                        <td>{total}</td>
</tr>
                    <tr>
                        <th>Status</th>
                        <td>{status}</td>
</tr>

                </table>
                <button onClick={() => handleDelete(_id)} className="bg-red-600 text-white px-3 py-1 rounded-md">Cancel Order</button>
                {usePathname() === "/manage-orders" ?<button onClick={() => handleUpdate(_id)} className="ml-3 bg-green-600 text-white px-3 py-1 rounded-md">Update Order</button>:""}
            </div>
        </div>
    )
}

export default Order
