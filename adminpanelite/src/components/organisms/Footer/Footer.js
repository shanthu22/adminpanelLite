import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterLeft">
        &copy; {new Date().getFullYear()}, made with ❤️ by
        <a
          href="https://tekkzen.com/"
          target="_blank"
          rel="noopener noreferrer">
          Tekkzen
        </a>
      </div>
      <div className="FooterRight">
        <div className="FooterRightBtn"> Tekkzen</div>
        <div className="FooterRightBtn">About Us</div>
        <div className="FooterRightBtn">Contact Us</div>
      </div>
    </div>
  );
};

export default Footer;
//FooterRight  => FooterLeft
