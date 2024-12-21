import { RevolvingDot } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
