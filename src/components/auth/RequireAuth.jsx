import { useAuth } from 'components/auth/auth'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const auth = useAuth();

  if(!auth.user) {
    return(
      <Navigate to='/login'/>
    )
  }

  return children
}

export default PrivateRoute;
