import { useDispatch, useSelector } from "react-redux";
import icons from "../../assets/sprite.svg";
import Features from "../Features/Features";
import ReviewAndLocation from "../ReviewAndLocation/ReviewAndLocation";
import css from "./CamperItem.module.css";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { toggleFavorite } from "../../redux/favorites/slice";
import { Link } from "react-router";

function CamperItem({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesCampers);
  const isFavorite = favorites.includes(camper.id);
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <>
      <div className={css.camperImgWrap}>
        <img
          className={css.camperImg}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        />
      </div>

      <div className={css.camperInfoWrap}>
        <div className={css.camperCardHeader}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <div className={css.priceWrap}>
            <p className={css.camperPrice}>{`€ ${camper.price}`}</p>
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavorite}
              fill={isFavorite ? "#e44848" : "#101828"}
              cursor="pointer"
            >
              <use href={`${icons}#heart`} />
            </svg>
          </div>
        </div>
        <ReviewAndLocation
          margin="listItem"
          rating={camper.rating}
          ratesTotal={camper.reviews.length}
          location={camper.location}
        />
        <p className={css.camperDescription}>{camper.description}</p>
        <Features camper={camper} />
        <Link className={css.linkCamperId} to={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </>
  );
}

export default CamperItem;
