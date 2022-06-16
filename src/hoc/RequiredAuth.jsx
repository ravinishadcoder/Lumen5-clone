import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const RequiredAuth = ({children}) => {
    const {isAuth} = useSelector((state) => state.auth);
   

  return isAuth ? children : <Navigate to={'/login'}/>
}

