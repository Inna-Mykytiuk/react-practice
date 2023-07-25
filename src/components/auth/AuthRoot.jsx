import React from 'react'
import { useLocation } from 'react-router-dom'
import LogIn from './login/LogIn'
import Register from './register/Register'

const AuthRoot = () => {
  const location = useLocation()
  return (
    <>
    {location.pathname === '/login' ? <LogIn/> : location.pathname === '/register' ? <Register/> : null}
    </>
  )
}

export default AuthRoot
