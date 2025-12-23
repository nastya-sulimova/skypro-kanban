import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
