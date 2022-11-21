import { useNavigate } from "react-router-dom";
import "./mainBody.css";

const MainBody = () => {
  const navigate = useNavigate();
  return (
    <div className="mainBody">
      <div className="mainBodyContent">
        <div className="imgList" onClick={() => navigate("/films")}>
          <div className="imgData">
            <img
              src={require("../../assets/Topics/films_normal.png")}
              alt=""
              className="imgCategory"
            />
            <div className="overlay"></div>
          </div>
          <div className="imgText">FILMS</div>
        </div>
        {/* jhgfkjhkg */}
        <div className="imgList" onClick={() => navigate("/species")}>
          <div className="imgData">
            <img
              src={require("../../assets/Topics/species_normal.png")}
              alt=""
              className="imgCategory"
            />
            <div className="overlay"></div>
          </div>
          <div className="imgText">SPECIES</div>
        </div>
        <div className="imgList" onClick={() => navigate("/planets")}>
          <div className="imgData">
            <img
              src={require("../../assets/Topics/planets_normal.png")}
              alt=""
              className="imgCategory"
            />
            <div className="overlay"></div>
          </div>
          <div className="imgText">PLANETS</div>
        </div>

        <div className="imgList" onClick={() => navigate("/characters")}>
          <div className="imgData">
            <img
              src={require("../../assets/Topics/characters_normal.png")}
              alt=""
              className="imgCategory"
            />
            <div className="overlay"></div>
          </div>
          <div className="imgText">PEOPLE</div>
        </div>
        <div className="imgList" onClick={() => navigate("/starships")}>
          <div className="imgData">
            <img
              src={require("../../assets/Topics/vehicles_normal.png")}
              alt=""
              className="imgCategory"
            />
            <div className="overlay"></div>
          </div>
          <div className="imgText">STARSHIP</div>
        </div>
        <div className="imgList" onClick={() => navigate("/vehicles")}>
          <div className="imgData">
            <img
              src={require("../../assets/Topics/droids_normal.png")}
              alt=""
              className="imgCategory"
            />
            <div className="overlay"></div>
          </div>
          <div className="imgText">VEHICLES</div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
