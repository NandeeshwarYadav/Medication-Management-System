// components/PublicRoute.js
/*import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");
  const role = Cookies.get("role");

  if (token && role) {
    return <Navigate to={`/${role}`} replace />;
  }

  return children;
};

export default PublicRoute;
*/

// components/PublicRoute.js
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");
  const role = Cookies.get("role");

  if (token && role) {
    return <Navigate to={`/${role}`} replace />;
  }

  return children;
};

export default PublicRoute;
