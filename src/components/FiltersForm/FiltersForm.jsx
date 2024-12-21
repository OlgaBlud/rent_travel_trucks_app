import { Field, Form, Formik } from "formik";
import css from "./FiltersForm.module.css";
import icons from "../../assets/sprite.svg";

function FiltersForm() {
  const initialValues = {
    location: "",
    AC: false,
    transmission: "", //automatic, manual
    kitchen: false,
    TV: false,
    bathroom: true,
    form: "", //van, fullyIntegrated, Alcove
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  {
    return (
      <div className={css.filtersWrap}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={RentRequestSchema}
        >
          <Form>
            {/* Location */}
            <label className={css.locationLabel} htmlFor="location">
              Location
            </label>
            <Field
              className={css.inputLocation}
              name="location"
              type="text"
              placeholder="City"
            />
            <svg className={css.icon} width="20" height="20">
              <use href={`${icons}#Map`} />
            </svg>
            {/* END Location */}
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
export default FiltersForm;
