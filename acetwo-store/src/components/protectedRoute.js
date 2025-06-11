import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
