import React from 'react'

const MenuItem = ({class, icon, name}) => {

    return (
        <div className="col">
            <div className="shadow-sm align-items-center justify-content-center d-flex flex-col rounded px-5 py-3" style={{ width: "max-content" }}>
                <div className="{{class}} rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                    <ImLeaf />
                </div>
                <h6>Organic Tea</h6>
            </div>
        </div>
    )
}

export default MenuItem
