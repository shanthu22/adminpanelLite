import "./Navbar.css";
// import "../../../assets/logo.png" as logo
import logo from "../../../assets/logo.png";
const Navbar = () => {
  // const logo = require("../../../assets/logo.png");
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
        {/* <div className="NavbarLeftBtn">Home</div> */}
        {/* <div className="NavbarRightBtn"> Tekkzen</div> */}
      </div>
    </div>
  );
};
export default Navbar;
