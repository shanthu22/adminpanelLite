import "./Navbar.css";
import logoutIcon from "../../../assets/icons/logout.png";
import logo from "../../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../utils/AuthContext/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const HandleLogout = () => {
    console.log("Logout");
    logout();
    navigate("/");
  };
  return (
    <div className="Nabvar">
      <div className="NavbarLeft">
        <div className="NavbarLeftLogo">
          <img src={logo}></img>
        </div>
        <div className="NavbarLeftTitle">TEKKZEN Admin Panel</div>
        {/*<div className="NavbarLeftBtn">About Us</div>
        <div className="NavbarLeftBtn">Contact Us</div> */}
      </div>
      <div className="NavbarRight">
        <div className="NavbarRightBtn">
          <img onClick={() => HandleLogout()} src={logoutIcon}></img>
        </div>
        {/* <div className="NavbarRightBtn"> Tekkzen</div> */}
      </div>
    </div>
  );
};
export default Navbar;
