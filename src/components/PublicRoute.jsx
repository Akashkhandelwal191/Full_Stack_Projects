import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  return loggedInUser ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute; 