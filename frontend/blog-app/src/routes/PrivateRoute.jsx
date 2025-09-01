import { Outlet } from "react-router-dom"

const PrivateRoute = ({allowedRoles}) => {
  // will implement later
    return <Outlet allowedRoles={allowedRoles}/>;
}

export default PrivateRoute
