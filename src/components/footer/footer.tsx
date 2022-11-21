import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerImg">
          <img
            src={require("../../assets/footer_logo.png")}
            alt=""
            className="logoFooterImg"
          />
        </div>
        <div className="footerText">TEARMS OF USE</div>
        <div className="footerText">LEGAL NOTICES</div>
        <div className="footerText">PRIVACY POLICY</div>
        <div className="footerText">STAR WARS HELPDESK</div>
        <div className="footerText">START WARS AT DISNEY STORE</div>
      </div>
      <div className="copyRight">
        TM & &#169; LucasFilm Ltd .All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
