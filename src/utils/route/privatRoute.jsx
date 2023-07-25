import { Outlet, Navigate } from "react-router-dom";

const PrivatRoute = () => {
  const auth = true;
  return (
    <>
      {auth ? <Outlet/> : <Navigate to="login"/> || <Navigate to="register"/>}
    </>
  )
}

export default PrivatRoute
