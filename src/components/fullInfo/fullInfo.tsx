import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetailsSync } from "../../redux/detailsSlice";
import { getDataSync } from "../../redux/starSlice";
import Details from "../details/details";
import "./fullInfo.css";

const FullInfo = () => {
  const detials = useSelector((state: any) => state.starDetails);
  const dispatch = useDispatch();

  const id = useParams();
  console.log("jhfgvyfgv", detials);

  useEffect(() => {
    dispatch(
      getDetailsSync(
        `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${id.id}.json`
      )
    );
  }, [dispatch]);

  console.log("iddd", id.id);
  console.log("data", typeof [1, 2]);

  return (
    <div className="fullInfo">
      <Details />
      <div className="fullInfoContent">
        <div className="fullInfoItem">
          <div className="contentImg">
            <img src={detials.image} alt="" className="itemImg" />
          </div>
          <div className="contentDetails scrollable-element">
            <div className="characterInfoName">{detials.name}</div>
            <div className="design">
              Designation:&nbsp; <span className="desigName">Sentient</span>
            </div>
            <div className="design">
              Affiliation:&nbsp; <span className="desigName">Jedi Order</span>
            </div>
            <div className="design">
              Locations:{" "}
              <span className="desigName">
                Yoda's Hut Lorem ipsum, dolor sit amet . Lorem ipsum, dolor sit
                amet
              </span>
            </div>
            <div className="design">
              Gender:&nbsp; <span className="desigName">Male</span>
            </div>
            <div className="design">
              Dimensions:&nbsp; <span className="desigName">Height:0.66m</span>
            </div>
            <div className="design">
              Species: &nbsp;<span className="desigName">Unknown</span>
            </div>
            <div className="design">
              Weapons:&nbsp;{" "}
              <span className="desigName">Yoda's Lightsaber, Lightsaber</span>
            </div>
            <div className="design">
              Vehicles:&nbsp; <span className="desigName">Yoda's Fighter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullInfo;
