import css from "./ReviewAndLocation.module.css";
import icons from "../../assets/sprite.svg";
function ReviewAndLocation({ margin, rating, ratesTotal, location }) {
  return (
    <div className={`${css.wrapper} ${css[margin]}`}>
      <div className={css.reviewWrap}>
        <svg width="16" height="16">
          <use href={`${icons}#star`} />
        </svg>
        <p className={css.reviews}>
          {rating} {ratesTotal} Reviews
        </p>
      </div>
      <div className={css.locationWrap}>
        <svg width="16" height="16">
          <use href={`${icons}#Map`} />
        </svg>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default ReviewAndLocation;
