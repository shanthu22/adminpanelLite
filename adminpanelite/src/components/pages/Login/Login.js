import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Popup from "../../atoms/Popup/Popup";
import logoImg from "../../../assets/logo.png";
const Login = () => {
  const navigate = useNavigate();
  //const history = useHistory();
  const [Formdata, setFormdata] = useState({});
  // const history = useHistory();
  const HandleOnchange = (e) => {
    setFormdata({ ...Formdata, [e.target.name]: e.target.value });
  };
  const HandleClick = () => {
    navigate("/dashboard");
    console.log(Formdata);
    // setFormdata({ default: "default" });
    // history.replace("/dashboard");
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
              <img src={logoImg}></img>
            </div>

            <div className="LoginForm">
              <input
                placeholder="Account Id"
                name="AccountId"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.AccountId}
                type="text"
                className="inputt"
              />
              <input
                placeholder="Password"
                name="Password"
                onChange={(e) => HandleOnchange(e)}
                value={Formdata.Password}
                type="password"
                className="inputt"
              />
              <button className="LoginBtn" onClick={() => HandleClick()}>
                Login{" "}
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
