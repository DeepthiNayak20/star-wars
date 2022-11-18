import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Characters from "../characters/characters";

import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="linkList">
        <NavLink to="#" className="linkNames">
          FILMS
        </NavLink>
        <NavLink to="#" className="linkNames">
          SPECIES
        </NavLink>
        <NavLink to="#" className="linkNames">
          PLANETS
        </NavLink>
        <NavLink to="/characters" className="linkNames">
          CHARACTERS
        </NavLink>
        <NavLink to="#" className="linkNames">
          STARSHIPS
        </NavLink>
        <NavLink to="#" className="linkNames">
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
