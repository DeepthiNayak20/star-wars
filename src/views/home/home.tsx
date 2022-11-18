import "./home.css";
import Header from "../../components/header/header";
import MainBody from "../../components/mainBody/mainBody";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="mainBodyContainer">
        <MainBody />
      </div>
    </div>
  );
};

export default Home;
