import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
