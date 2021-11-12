import React from 'react'
import { useAuth } from "../../hooks/useAuth";
import { useHistory, useLocation } from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc'
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const { handleGoogleSignIn } = useAuth();
    const redirect_url = location.state?.from || '/';
    const handleGoogleLogin = () => {
        handleGoogleSignIn().then(result => {
            // setUser(result.user)
            history.push(redirect_url)

        })
    }
    return (
        <div>
            <button onClick={() => handleGoogleLogin()} className="shadow-md my-5 px-3 py-2 flex justify-between align-items-center mx-auto rounded-md"><FcGoogle className="fa-2x"/>Login with Google</button>
        </div>
    )
}

export default Login
