// ProtectedRoute.js
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");
  const role = Cookies.get("role");
  const location = useLocation();

  if (!token || !role) {
    return <Navigate to="/login" replace />;
  }

  // Restrict role access based on the current path
  if (location.pathname.startsWith("/patient") && role !== "patient") {
    return <Navigate to={`/${role}`} replace />;
  }

  if (location.pathname.startsWith("/caretaker") && role !== "caretaker") {
    return <Navigate to={`/${role}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
