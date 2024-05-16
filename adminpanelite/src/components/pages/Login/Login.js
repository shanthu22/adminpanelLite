import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import logoImg from "../../../assets/logo.png";
import { CredentialsValidation } from "../../../utils/credentialsValidation/credentialsValidation";
import { useAuth } from "../../../utils/AuthContext/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login, logout } = useAuth();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validationStatus = async () => {
    const myres = await CredentialsValidation({
      credentials: formData,
      login,
      logout,
    });
    if (myres) {
      console.log("Login successfully");
      navigate("/dashboard");
    } else {
      alert("Incorrect ID or Password");
    }
  };

  const handleClick = async () => {
    console.log(formData);
    if (formData.username === "" || formData.password === "") {
      alert("Please enter both username and password");
    } else {
      validationStatus();
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="e-card playing">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="infotop">
            <div className="image">
              <img src={logoImg} alt="Logo"></img>
            </div>

            <div className="LoginForm">
              <input
                placeholder="Account Id"
                name="username"
                onChange={(e) => handleOnChange(e)}
                value={formData.username}
                type="text"
                className="inputt"
              />
              <input
                placeholder="Password"
                name="password"
                onChange={(e) => handleOnChange(e)}
                value={formData.password}
                type="password"
                className="inputt"
              />
              <button className="LoginBtn" onClick={handleClick}>
                Login
              </button>
              <div className="name">Contact Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
