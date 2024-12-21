import { useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import css from "./CampersCatalogPage.module.css";
import { useDispatch } from "react-redux";
import { apiGetAllCampers } from "../../redux/campers/operations";
function CampersCatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetAllCampers({ page: 1, limit: 3 }));
  }, [dispatch]);
  return (
    <main>
      <section className={css.section}>
        <FiltersForm />
        <CampersList />
      </section>
    </main>
  );
}

export default CampersCatalogPage;
