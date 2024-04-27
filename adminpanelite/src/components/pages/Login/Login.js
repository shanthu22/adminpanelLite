import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  // Example usage of navigate function
  const handleClick = () => {
    navigate("/dashboard"); // Navigate to the "/dashboard" route
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleClick}>Go to Dashboard</button>
    </div>
  );
};

export default Login;
