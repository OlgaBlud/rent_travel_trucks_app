import { useSelector } from "react-redux";
import {
  selectAllCampers,
  selectCampersError,
  selectCampersIsLoading,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import CamperItem from "../CamperItem/CamperItem";
import Loader from "../Loader/Loader";

function CampersList() {
  const allCampers = useSelector(selectAllCampers);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);
  console.log(allCampers);
  return (
    <>
      {isLoading && <Loader />}
      {error !== null && (
        <p className={css.errorMsg}>{error}. Please, try again later.</p>
      )}
      {Array.isArray(allCampers) && (
        <ul className={css.campersList}>
          {allCampers.map((camper) => {
            // console.log("TV", camper.TV);
            // console.log("bathroom", camper.bathroom);
            // console.log("transmission", camper.transmission);
            return (
              <li className={css.campersListItem} key={camper.id}>
                <CamperItem camper={camper} />
              </li>
            );
          })}
        </ul>
      )}
      {/* {Array.isArray(allCampers) && allCampers.length === 0 && (
        <p>
          За вашим запитом &quot;{query}&quot; не знайдено жодного кампера.
          Спробуйте, будь ласка, з іншими фільтрами.
        </p>
      )} */}
    </>
  );
}

export default CampersList;
