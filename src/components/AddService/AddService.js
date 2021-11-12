import axios from 'axios';
import { useState } from 'react'

const AddService = () => {

    const [alert, setAlert] = useState(true)
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target["name"].value,
            image: e.target["image"].value,
            detail: e.target["detail"].value,
            value: e.target["price"].value
        }
        axios.post('https://fierce-stream-76802.herokuapp.com/services', data)
            .then(res => {
                setAlert(!alert)
                window.alert("New Product Added Successfully")
                e.target["name"].value = ''
                e.target["image"].value = ''
                e.target["detail"].value = ''
                e.target["price"].value = ''
            });
    }

    return (
        <div className="container text-start">
            {alert ? <div class="alert alert-warning alert-dismissible fade show" onClick={setAlert(!alert)} role="alert">
                <strong>Yae!</strong> Product Added Successfully
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : ''}
            <div className="bg-green-100 p-5 rounded my-5">
                <h1 className="text-center font-bold uppercase">Add a product</h1>
                <form onSubmit={handleSubmit} method="POST">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" id="name" placeholder="Product Name" className="px-3 py-2 outline-none rounded-full w-100" /><br /><br />
                    <label htmlFor="image">Image URL</label><br />
                    <input type="url" name="image" id="image" placeholder="Product Image URL" className="px-3 py-2 outline-none rounded-full w-100" /><br /><br />
                    <label htmlFor="detail">Description</label><br />
                    <textarea name="detail" id="detail" cols="30" rows="10" placeholder="Product description" className="px-3 py-2 outline-none rounded-lg w-100"></textarea><br /><br />
                    <label htmlFor="price">Price</label><br />
                    <input type="number" name="price" id="price" placeholder="Product price" className="px-3 py-2 outline-none rounded-full w-100" /><br /><br />
                    <input type="submit" value="Add Product" className="bg-green-600 px-3 py-2 text-white rounded-lg" /><br />
                </form>
            </div>
        </div>
    )
}

export default AddService
