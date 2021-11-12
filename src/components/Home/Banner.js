import React from 'react'
import { useHistory } from 'react-router'

const Banner = () => {
    const history = useHistory();
    return (
        <div className="bg-green-100">
            <div className="flex justify-between row row-cols-1 row-cols-md-2 mx-auto py-5 items-center text-start container mx-auto">
            <div className="col">
                <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/166941964/original/523822e6e77b1f294b0c1fb547131ea067b533cf/create-pouch-design-packaging-design-3d-mockup-design.jpg" alt="" className="rounded-xl"/>
            </div>
                <div className="col">
                    <h1>Get Delivery Unlimited Collection of tea</h1>
                    <p>Drink Tea stay healthy</p>
                    <button className="text-white px-3 py-2 rounded-md bg-green-600" onClick={()=>history.push('#products')}>See Products</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
