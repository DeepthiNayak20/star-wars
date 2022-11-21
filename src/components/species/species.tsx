import Details from "../details/details";
import { useDispatch, useSelector } from "react-redux";
import { getDataSync } from "../../redux/starSlice";
import { useEffect } from "react";
import { prependOnceListener } from "process";

const Species = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: any) => state.starWars);

  console.log(characters);
  useEffect(() => {
    dispatch(getDataSync("https://swapi.dev/api/species"));
  }, []);

  return (
    <div>
      <Details />
      <div className="characters">
        {characters &&
          characters.results &&
          characters.results.map((item: any, i: any) => (
            <div className="characterName" key={i}>
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

export default Species;
