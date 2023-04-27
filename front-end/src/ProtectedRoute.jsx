import { useUserContext } from "./userContext";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return  children ? children : <Outlet />;
};
export default ProtectedRoute;
