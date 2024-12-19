import { useSelector } from "react-redux";
import Features from "../Features/Features";
import css from "./CamperFeatures.module.css";
import { selectCamperDetails } from "../../redux/campers/selectors";
function CamperFeatures() {
  const camperInfo = useSelector(selectCamperDetails);
  return (
    <div className={css.featuresWrap}>
      {<Features camper={camperInfo} />}
      <h3 className={css.subtitle}>Vehicle details</h3>
      <hr className={css.line}></hr>
      <ul className={css.characteristicsList}>
        <li className={css.characteristicsItem}>
          <p className={css.characteristicsText}>Form</p>
          <p className={css.characteristicsText}>{camperInfo.form}</p>
        </li>
        <li className={css.characteristicsItem}>
          <p className={css.characteristicsText}>Length</p>
          <p className={css.characteristicsText}>{camperInfo.length}</p>
        </li>
        <li className={css.characteristicsItem}>
          <p className={css.characteristicsText}>Width</p>
          <p className={css.characteristicsText}>{camperInfo.width}</p>
        </li>

        <li className={css.characteristicsItem}>
          <p className={css.characteristicsText}>Height</p>
          <p className={css.characteristicsText}>{camperInfo.height}</p>
        </li>
        <li className={css.characteristicsItem}>
          <p className={css.characteristicsText}>Tank</p>
          <p className={css.characteristicsText}>{camperInfo.tank}</p>
        </li>
        <li className={css.characteristicsItem}>
          <p className={css.characteristicsText}>Consumption</p>
          <p className={css.characteristicsText}> {camperInfo.consumption}</p>
        </li>
      </ul>
    </div>
  );
}

export default CamperFeatures;
