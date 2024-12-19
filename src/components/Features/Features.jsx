import icons from "../../assets/sprite.svg";
import css from "./Features.module.css";
const Features = ({ camper }) => {
  const features = [
    {
      key: "transmission",
      label: "Automatic",
      svg: "transmission",
      value: "automatic",
    },
    { key: "AC", label: "AC", svg: "ac" },
    { key: "engine", label: "Hybrid", svg: "fuel-pump", value: "hybrid" },
    { key: "engine", label: "Diesel", svg: "fuel-pump", value: "diesel" },
    { key: "engine", label: "Petrol", svg: "fuel-pump", value: "petrol" },
    { key: "kitchen", label: "Kitchen", svg: "cup-hot" },
    { key: "TV", label: "TV", svg: "tv" },
    { key: "radio", label: "Radio", svg: "radio" },
    { key: "bathroom", label: "Bathroom", svg: "water" },
    { key: "gas", label: "Gas", svg: "fuel-pump" },
    { key: "microwave", label: "Microwave", svg: "wave" },
    { key: "refrigerator", label: "Fridge", svg: "fridge" },
    { key: "water", label: "Water", svg: "water" },
  ];
  return (
    <ul className={css.featuresList}>
      {features.map((feature) => {
        const isFeatureAvailable =
          camper[feature.key] === true || camper[feature.key] === feature.value;
        return isFeatureAvailable ? (
          <li className={css.featureItem} key={feature.key}>
            <svg className={css.featureIcon} width="20" height="20">
              <use href={`${icons}#${feature.svg}`} />
            </svg>
            <span>{feature.label}</span>
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default Features;
