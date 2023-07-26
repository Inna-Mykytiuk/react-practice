import React from 'react'
import { useLocation } from 'react-router-dom'
import LogIn from './login/LogIn'
import Register from './register/Register'
import { Root } from './AuthRoot.styled'
import { Box } from '@mui/material'

const AuthRoot = () => {
  const location = useLocation();

  return (
    <Root>
      <div>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
        >
        {(location.pathname === '/login' ? <LogIn/> : location.pathname === '/register' ? <Register/> : null)}
        </Box>
      </div>
    </Root>
  )
}

export default AuthRoot
