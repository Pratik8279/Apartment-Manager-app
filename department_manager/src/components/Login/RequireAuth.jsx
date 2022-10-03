import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider'
import Login from './Login';


function RequiredAuth({children}) {
    const {token} = useContext(AuthContext);

    if(token) return children
    // return <h3>You Need to <Link to= "/signin">Signin</Link> to access this page </h3>
    return <Login/>
}

export default RequiredAuth