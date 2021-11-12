import React from 'react'
import { useHistory } from 'react-router'

const Items = props => {
    const history = useHistory();
    const { _id, name, value, detail, image } = props.service
    return (
                <div className="col">
                    <div className="bg-green-100 rounded-xl hover:shadow-lg">
                        <img src={image} alt="" className="w-full rounded-xl" />
                <div className="p-3"><h4>{name}</h4>
                    <p>{_id}</p>
                    <p>{detail.slice(0, 35)}</p>
                    <div className="d-flex justify-content-between">
                        <h2>${value}</h2>
                        <button className="bg-green-600 rounded-lg fw-bold px-2 text-white uppercase" onClick={() => { history.push(`/placeorder/${_id}`) }}>Order Now</button>
                    </div></div>
                    </div>
                </div>
    )
}

export default Items
