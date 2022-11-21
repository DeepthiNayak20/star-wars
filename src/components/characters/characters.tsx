import "./characters.css";
import Details from "../details/details";
import { useDispatch, useSelector } from "react-redux";
import { getDataSync } from "../../redux/starSlice";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const characters = useSelector((state: any) => state.starWars);

  console.log(characters);
  useEffect(() => {
    dispatch(getDataSync(`https://swapi.dev/api/people`));
  }, []);

  return (
    <div>
      <Details />
      <div className="characters">
        {characters &&
          characters.results &&
          characters.results.map((item: any, i: any) => (
            <div
              className="characterName"
              key={i}
              onClick={() => {
                console.log(
                  "url",
                  item.url.split("/")[item.url.split("/").length - 2]
                );
                navigate(
                  `/characters/fullinfo/${
                    item.url.split("/")[item.url.split("/").length - 2]
                  }`
                );
              }}
            >
              {item.name}
            </div>
          ))}
      </div>
      <div className="btnChar">
        <button
          className="nextButton"
          disabled={Boolean(!characters.previous)}
          onClick={() => {
            dispatch(getDataSync(characters.previous));
          }}
        >
          PREVIOUS
        </button>
        <button
          className="nextButton"
          disabled={Boolean(!characters.next)}
          onClick={() => {
            dispatch(getDataSync(characters.next));
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Characters;
