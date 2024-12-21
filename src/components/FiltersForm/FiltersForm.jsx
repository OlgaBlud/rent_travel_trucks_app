import { Field, Form, Formik } from "formik";
import css from "./FiltersForm.module.css";
import icons from "../../assets/sprite.svg";
import { FiWind } from "react-icons/fi";
import { TbManualGearbox } from "react-icons/tb";
import { BsCupHot } from "react-icons/bs";
import { IoMdTv } from "react-icons/io";
import { PiShower } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { resetFilters, setFilters } from "../../redux/filters/slice";
import { useState } from "react";

function FiltersForm() {
  const [filter, setFilter] = useState(false);
  const initialValues = {
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  };
  const dispatch = useDispatch();
  // const [filerValue, setFilterValue] = useState(null);
  const handleSubmit = (values) => {
    console.log(values);

    const filteredValues = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== "" && values[key] !== false) {
        acc[key] = values[key];
      }
      return acc;
    }, {});
    setFilter(true);

    dispatch(setFilters(filteredValues));
  };
  const handleReset = (resetForm) => {
    dispatch(resetFilters()); // Сброс фильтров в Redux
    resetForm(); // Полный сброс формы в Formik
    setFilter(false); // Убираем состояние фильтра
  };
  {
    return (
      <div className={css.filtersWrap}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={RentRequestSchema}
        >
          {({ resetForm }) => (
            <Form>
              {/* Location */}
              <label className={css.locationLabel} htmlFor="location">
                Location
              </label>
              <div className={css.locationWrap}>
                <Field
                  className={css.inputLocation}
                  name="location"
                  type="text"
                  placeholder="Kyiv, Ukraine"
                />
                <svg className={css.locationIcon} width="20" height="20">
                  <use href={`${icons}#Map`} />
                </svg>
              </div>
              {/* END Location */}
              <p className={css.text}>Filters</p>

              <h3 className={css.filterTitle}>Vehicle equipment</h3>
              <hr className={css.line} />

              <div className={css.checkboxWrap}>
                <Field
                  type="checkbox"
                  id="ac"
                  name="AC"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="ac" className={css.checkboxLabel}>
                  <FiWind className={css.checkboxFieldIcon} />
                  <p className={css.checkboxFieldText}>AC</p>
                </label>
                {/*  */}
                <Field
                  type="checkbox"
                  id="transmission"
                  name="transmission"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="transmission" className={css.checkboxLabel}>
                  <TbManualGearbox className={css.checkboxFieldIcon} />
                  <p className={css.checkboxFieldText}>Automatic</p>
                </label>
                {/*  */}
                <Field
                  type="checkbox"
                  id="kitchen"
                  name="kitchen"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="kitchen" className={css.checkboxLabel}>
                  <BsCupHot className={css.checkboxFieldIcon} />
                  <p className={css.checkboxFieldText}>Kitchen</p>
                </label>
                {/*  */}
                <Field
                  type="checkbox"
                  id="TV"
                  name="TV"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="TV" className={css.checkboxLabel}>
                  <IoMdTv className={css.checkboxFieldIcon} />
                  <p className={css.checkboxFieldText}>TV</p>
                </label>
                {/*  */}
                <Field
                  type="checkbox"
                  id="bathroom"
                  name="bathroom"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="bathroom" className={css.checkboxLabel}>
                  <PiShower className={css.checkboxFieldIcon} />
                  <p className={css.checkboxFieldText}>Bathroom</p>
                </label>
              </div>

              <h3 className={css.filterTitle}>Vehicle type</h3>
              <hr className={css.line} />
              <div className={css.checkboxWrap}>
                <Field
                  type="radio"
                  id="van"
                  name="form"
                  value="van"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="van" className={css.checkboxLabel}>
                  <svg width="32" height="32">
                    <use href={`${icons}#van`} />
                  </svg>
                  <p className={css.checkboxFieldText}>Van</p>
                </label>
                {/*  */}
                <Field
                  type="radio"
                  id="fullyIntegrated"
                  name="form"
                  value="fullyIntegrated"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="fullyIntegrated" className={css.checkboxLabel}>
                  <svg width="32" height="32">
                    <use href={`${icons}#full`} />
                  </svg>
                  <p className={css.checkboxFieldText}>Fully </p>
                </label>
                {/*  */}
                {/*  */}
                <Field
                  type="radio"
                  id="alcove"
                  name="form"
                  value="alcove"
                  className={css.hiddenCheckbox}
                />
                <label htmlFor="alcove" className={css.checkboxLabel}>
                  <svg width="32" height="32">
                    <use href={`${icons}#alcove`} />
                  </svg>
                  <p className={css.checkboxFieldText}>Alcove</p>
                </label>
              </div>
              <div className={css.btnWrap}>
                <button className={css.filterBtn} type="submit">
                  Search
                </button>

                {filter && (
                  <button
                    className={css.resetFilterBtn}
                    type="button"
                    onClick={() => handleReset(resetForm)}
                  >
                    Reset
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default FiltersForm;
