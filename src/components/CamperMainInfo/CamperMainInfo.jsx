import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/campers/selectors";
import ReviewAndLocation from "../ReviewAndLocation/ReviewAndLocation";
import css from "./CamperMainInfo.module.css";
import { NavLink, Outlet } from "react-router";
import RentCamperForm from "../RentCamperForm/RentCamperForm";
import clsx from "clsx";
function CamperMainInfo() {
  const camper = useSelector(selectCamperDetails);
  // console.log(camper);
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.linkActive);
  };
  return (
    <div>
      <h2 className={css.camperTitle}>{camper.name}</h2>
      <ReviewAndLocation
        margin="details"
        rating={camper.rating}
        ratesTotal={camper.reviews.length}
        location={camper.location}
      />
      <p className={css.camperPrice}>{`€ ${camper.price}`}</p>

      {camper.gallery.length > 0 ? (
        <ul className={css.gallery}>
          {camper.gallery.map((photo, index) => (
            <li className={css.galleryItem} key={index}>
              <img
                className={css.photo}
                src={photo.thumb}
                alt={`Camper image ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}
      <p className={css.description}>{camper.description}</p>
      <div className={css.linksWrap}>
        <NavLink className={linkClass} to="features">
          Features
        </NavLink>
        <NavLink className={linkClass} to="reviews">
          Reviews
        </NavLink>
      </div>
      <div className={css.additionalInfoWrap}>
        <Outlet />
        <RentCamperForm />
      </div>
    </div>
  );
}

export default CamperMainInfo;
