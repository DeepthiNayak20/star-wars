import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={require("../../assets/logo.png")}
          alt=""
          className="logoImg"
        />
      </div>
    </div>
  );
};

export default Header;
