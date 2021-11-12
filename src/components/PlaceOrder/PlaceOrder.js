import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useAuth } from '../../hooks/useAuth';

const Product = () => {
    const { _id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const [alert, setAlert] = useState(true);
    const [total, setTotal] = useState(0);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://fierce-stream-76802.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setTotal(parseInt(product.value) + 50);
            });
    })
    const formHandler = e => {
        e.preventDefault();
        const data = {
            product_id: _id,
            username: e.target["username"].value,
            email: e.target["email"].value,
            address: e.target["address"].value,
            phone: e.target["phone"].value,
            total: total,
            status: "pending"
        }
        axios.post('https://fierce-stream-76802.herokuapp.com/placeorder', data)
            .then(res => {
                setAlert(!alert)
                window.alert("New Product Added Successfully")
                e.target["address"].value = ''
                e.target["phone"].value = ''
            });
    }
    return (
        <div className="container mx-auto row row-col-1 row-cols-md-2 d-flex text-start my-5 g-5">
            <div className="col-12 col-md-7">
                <button className="bg-green-600 text-white rounded-xl px-3 py-2 " onClick={() => history.push('/')}>Go BACK</button>
                <button className="ml-2 bg-yellow-600 text-white rounded-xl px-3 py-2 " onClick={() => history.push(`/update-product/${_id}`)}>Update Product</button>
                <h4 className="mt-3">{product.name}</h4>
                <img src={product.image} alt="" className="rounded-lg" />
                <h6 className="mt-3">Description:</h6>
                <p>{product.detail}</p>
                <h1>${product.value}</h1>
            </div>
            <div className="col-12 col-md-5">
                <div className="bg-green-100 p-5 rounded-lg">
                    <h2>Payment Detail</h2>

                    <form method="POST" onSubmit={formHandler}>
                        <label htmlFor="username">
                            Username:
                        </label><br />
                        <input type="text" name="username" id="username" className="rounded-xl w-100 px-2 py-1 bg-green-50 outline-none"
                            placeholder="username" value={user.displayName} /><br /><br />
                        <label htmlFor="email address">
                            Email address:
                        </label><br />
                        <input type="email" name="email" value={user.email} id="email address" className="rounded-xl w-100 px-2 py-1 bg-green-50 outline-none"
                            placeholder="Shipping Address" /><br /><br />
                        <label htmlFor="address">
                            Address:
                        </label><br />
                        <input type="text" name="address" id="address" className="rounded-xl w-100 px-2 py-1 bg-green-50 outline-none"
                            placeholder="Shipping Address" /><br /><br />
                        <label htmlFor="address">
                            Phone:
                        </label><br />
                        <input type="text" name="phone" id="phone" className="rounded-xl w-100 px-2 py-1 bg-green-50 outline-none"
                            placeholder="Phone Number" /><br />
                        <br />
                        <span>Payment Method:</span><br />
                        <p className="bg-green-50 px-2 py-1 rounded-lg ">Cash on Delivery</p>
                        <div className="bg-green-200 px-3 py-2 rounded-xl">
                            <h5>Shipping Cost: $50</h5>
                            <h3>Total: ${total}</h3>
                        </div>
                        <input type="submit" className="bg-green-600 text-white px-3 py-2 rounded-xl mt-3 w-100" value="Place Order" />
                    </form>
                </div></div>
        </div>
    )
}

export default Product
