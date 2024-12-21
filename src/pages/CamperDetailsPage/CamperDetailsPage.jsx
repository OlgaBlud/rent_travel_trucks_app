import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { apiGetCamperById } from "../../redux/campers/operations";
// import { selectCamperDetails } from "../../redux/campers/selectors";
import css from "./CamperDetailsPage.module.css";
import CamperMainInfo from "../../components/CamperMainInfo/CamperMainInfo";
import {
  selectCamperDetails,
  selectCampersError,
  selectCampersIsLoading,
} from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";

function CamperDetailsPage() {
  const { id } = useParams();
  const camperInfo = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);

  // console.log(camperInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;
    dispatch(apiGetCamperById(id));
  }, [id, dispatch]);

  return (
    <main>
      {isLoading && <Loader />}
      {error !== null && <p>{error}. Please, try again later.</p>}
      {camperInfo !== null && (
        <section className={css.section}>
          {camperInfo && <CamperMainInfo />}
        </section>
      )}
    </main>
  );
}

export default CamperDetailsPage;
