import "./Navbar.css";
import logout from "../../../assets/icons/logout.png";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const HandleLogout = () => {
    console.log("Logout");
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
          <img onClick={() => HandleLogout()} src={logout}></img>
        </div>
        {/* <div className="NavbarRightBtn"> Tekkzen</div> */}
      </div>
    </div>
  );
};
export default Navbar;
