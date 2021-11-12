import React from 'react'
import { FaLeaf } from 'react-icons/fa';
import { ImLeaf } from 'react-icons/im';
import { IoIosLeaf } from 'react-icons/io';
import { SiLeaflet } from 'react-icons/si';
const Menu = () => {
    return (
        <div className="container mx-auto my-5">
            <h3>Our Menus</h3>
            <div className="d-flex align-items-center mt-3 row row-cols-2 row-cols-md-3 row-cols-lg-6 gy-5">
                <div className="col">
                    <div className="shadow-sm text-center rounded px-5 py-3" style={{ width: "max-content" }}>
                        <div className="bg-yellow-200 rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                            <FaLeaf className="fa-2x"/>
                        </div>
                        <h6>Herb Tea</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow-sm text-center rounded px-5 py-3" style={{ width: "max-content" }}>
                        <div className="bg-red-200 rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                            <IoIosLeaf className="fa-2x"/>
                        </div>
                        <h6>Red Tea</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow-sm align-items-center justify-content-center d-flex flex-col rounded px-5 py-3" style={{ width: "max-content" }}>
                        <div className="bg-indigo-200 rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                           <ImLeaf className="fa-2x"/>
                        </div>
                        <h6>Organic Tea</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow-sm text-center rounded px-5 py-3" style={{ width: "max-content" }}>
                        <div className="bg-purple-200 rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                           <SiLeaflet className="fa-2x"/>
                        </div>
                        <h6>Mint Tea</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow-sm text-center rounded px-5 py-3" style={{ width: "max-content" }}>
                        <div className="bg-red-300 rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                            <i class="fas fa-cheese"></i>
                        </div>
                        <h6>Coffee</h6>
                    </div>
                </div>
                <div className="col">
                    <div className="shadow-sm text-center rounded px-5 align-items-center justify-content-center d-flex flex-col py-3" style={{ width: "max-content" }}>
                        <div className="bg-green-200 rounded-circle d-flex justify-content-center align-items-center mb-2" style={{ width: "50px", height: "50px" }}>
                            <i class="fas fa-egg fa-2x"></i>
                        </div>
                        <h6>Lemon tea</h6>
                    </div>
                </div>


            </div>
        </div>
        
    )
}

export default Menu
