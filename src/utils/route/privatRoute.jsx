import { Outlet, Navigate } from "react-router-dom";

const PrivatRoute = () => {
  const auth = false;
  return (
    <>
      {auth ? <Outlet/> : <Navigate to="login" />}
    </>
  )
}

export default PrivatRoute
