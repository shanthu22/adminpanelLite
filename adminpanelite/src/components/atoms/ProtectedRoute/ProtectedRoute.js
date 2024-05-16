// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import MainLayout from "../../templates/MainLayout/MainLayout";
import { useAuth } from "../../../utils/AuthContext/AuthContext";

const ProtectedRoute = ({ ...props }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <MainLayout /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
