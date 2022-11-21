import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Characters from "../characters/characters";
import "../characters/characters.css";

import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="linkList">
        <NavLink to="/films" className="linkNames">
          FILMS
        </NavLink>
        <NavLink to="/species" className="linkNames">
          SPECIES
        </NavLink>
        <NavLink to="/planets" className="linkNames">
          PLANETS
        </NavLink>
        <NavLink to="/characters" className="linkNames">
          CHARACTERS
        </NavLink>
        <NavLink to="/starships" className="linkNames">
          STARSHIPS
        </NavLink>
        <NavLink to="/vehicles" className="linkNames">
          VEHICLES
        </NavLink>
      </div>

      <Routes>
        {/* <Route path="/characters/*" element={<Characters />} /> */}
      </Routes>
    </div>
  );
};

export default Details;
