import { useSelector } from "react-redux";
import css from "./CamperReviews.module.css";
import { selectCamperDetails } from "../../redux/campers/selectors";
import { nanoid } from "nanoid";
import icons from "../../assets/sprite.svg";

function CamperReviews() {
  const camper = useSelector(selectCamperDetails);
  const starsMax = 5;
  const getStarColor = (index, rating) => {
    if (index < rating) {
      return "#ffc531"; // Цвет для заполненных звезд
    }
    return "#f2f4f7"; // Цвет для пустых звезд
  };
  return (
    <div className={css.reviewsWrap}>
      <ul className={css.reviewList}>
        {camper.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          camper.reviews.map((item) => (
            <li className={css.reviewItem} key={nanoid()}>
              <div className={css.reviewHead}>
                <div className={css.reviewerName}>
                  {item.reviewer_name.charAt(0)}
                </div>
                <div>
                  <h3 className={css.reviewerNameFull}>{item.reviewer_name}</h3>
                  {[...Array(starsMax)].map((_, index) => (
                    <svg
                      width="16"
                      height="16"
                      fill={getStarColor(index, item.reviewer_rating)}
                      key={nanoid()}
                    >
                      <use href={`${icons}#star-1`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={css.reviewerComment}>{item.comment}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default CamperReviews;
