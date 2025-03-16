import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  return loggedInUser ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
