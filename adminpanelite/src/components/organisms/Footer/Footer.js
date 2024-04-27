import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterRight">
        &copy; {new Date().getFullYear()}, made with ❤️ by
        <a
          href="https://tekkzen.com/"
          target="_blank"
          rel="noopener noreferrer">
          Tekkzen
        </a>
      </div>
      <div className="FooterLeft">
        <div className="FooterLeftBtn"> Tekkzen</div>
        <div className="FooterLeftBtn">About Us</div>
        <div className="FooterLeftBtn">Contact Us</div>
      </div>
    </div>
  );
};

export default Footer;
