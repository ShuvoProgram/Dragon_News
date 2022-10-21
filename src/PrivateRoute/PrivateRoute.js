import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" />;
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    return children;
};

export default PrivateRoute;