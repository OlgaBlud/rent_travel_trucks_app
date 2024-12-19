import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import CamperItem from "../CamperItem/CamperItem";

function CampersList() {
  const allCampers = useSelector(selectAllCampers);
  // console.log(allCampers);
  return (
    <ul className={css.campersList}>
      {allCampers.map((camper) => {
        // console.log("TV", camper.TV);
        // console.log("bathroom", camper.bathroom);
        return (
          <li className={css.campersListItem} key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        );
      })}
    </ul>
  );
}

export default CampersList;
