import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCampers,
  selectCampersError,
  selectCampersIsLoading,
  selectCurrentPage,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import CamperItem from "../CamperItem/CamperItem";
import Loader from "../Loader/Loader";
import { incrementPage } from "../../redux/campers/slice";
import { apiGetAllCampers } from "../../redux/campers/operations";
import { selectFilters } from "../../redux/filters/selectors";

function CampersList() {
  const dispatch = useDispatch();
  const allCampers = useSelector(selectAllCampers);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);
  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotalCampers);
  console.log(allCampers);
  const filters = useSelector(selectFilters);
  console.log(filters);
  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(apiGetAllCampers({ page: currentPage + 1, limit: 3 }));
  };

  return (
    <>
      {isLoading && <Loader />}
      {error !== null && (
        <p className={css.errorMsg}>{error}. Please, try again later.</p>
      )}
      <div>
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
        {Array.isArray(allCampers) && allCampers.length < total && (
          <button
            className={css.loadMoreBtn}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            Load More
          </button>
        )}
      </div>
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
