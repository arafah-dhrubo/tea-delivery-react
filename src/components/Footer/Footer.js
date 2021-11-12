import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaLeaf } from 'react-icons/fa';
import { useHistory } from 'react-router';
const Footer = () => {
    const history = useHistory();
    return (
        <div className="bg-green-500 position-relative bottom-0 w-100">
            <div className="container mx-auto p-3">
                <div className="flex justify-content-center">
                    <FaFacebook  className="fa-2x"/>
                    <FaTwitter  className="fa-2x"/>
                   <FaYoutube className="fa-2x"/> 
                </div>
                <div className="mt-2 flex align-items-center justify-content-center">
                    &#169;Copyright &nbsp; <button class="d-flex align-items-center fw-bold uppercase" onClick={() => history.push('/')}>Herb <FaLeaf className="mx-2 fa-2x text-white" />Tea</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
