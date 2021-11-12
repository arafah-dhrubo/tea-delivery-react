import React from 'react'
import { FaLeaf, FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router-dom'
import  {useAuth}  from '../../hooks/useAuth'

const Header = ({ totalServices }) => {
    const { user, handleSignOut } = useAuth()
    const history = useHistory()
    const linkHandler = link => history.push(link)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light text-start">
            <div class="container">
                <button class="d-flex align-items-center fw-bold uppercase" onClick={() => history.push('/')}>Herb <FaLeaf className="mx-2 fa-2x text-green-600"/>Tea</button>
                <button class="navbar-toggler border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars className="fa-2x text-green-600"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 flex items-center">
                        <li class="nav-item">
                            <button class="nav-link active" aria-current="page" onClick={()=>history.push('/')}>Home</button>
                        </li>
                        {
                            user?.displayName ? <span className="flex items-center"><li class="nav-item">
                                <button class="nav-link active" aria-current="page" onClick={() => history.push(`/my-orders/${user.email}`)}>My Orders</button>
                            </li>
                                <span className="text-green-600 ml-5 font-bold">Hi! {user.displayName}</span>
                                <button className="bg-green-600 text-white px-3 py-2 ml-3 rounded-md" onClick={() => history.push('/add-product')}>Add Product</button>
                                <button className="bg-green-600 text-white px-3 py-2 ml-3 rounded-md" onClick={() => history.push('/manage-orders')}>Manage Orders</button>
                                <button className="bg-green-600 text-white px-3 py-2 ml-3 rounded-md" onClick={() => handleSignOut()}>Logout</button>
                            </span> : <span className="flex item-center">
                                <li class="nav-item">
                                    <button class="nav-link" onClick={() => history.push('/login')}>Login</button>
                                </li>
                                
                            </span>
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}

export default Header;
