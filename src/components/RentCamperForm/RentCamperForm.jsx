import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RentCamperForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

function RentCamperForm() {
  const RentRequestSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Name is too Short!")
      .max(50, "Name is too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Email is required"),
    date: Yup.string().required("Period is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    date: "",
    message: "",
  };
  const handleSubmit = (values, actions) => {
    toast("We will contact you soon!");
    // console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RentRequestSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.inputWrap}>
              <Field
                className={css.field}
                type="text"
                name="username"
                placeholder="Name*"
              />
              <ErrorMessage
                className={css.errorMsg}
                name="username"
                component="span"
              />
            </div>
            <div className={css.inputWrap}>
              <Field
                className={css.field}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                className={css.errorMsg}
                name="email"
                component="span"
              />
            </div>

            {/* <div className={css.inputDateWrap}> */}
            <DatePicker
              className={css.inputDate}
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              placeholderText="Booking date*"
              dateFormat="yyyy-MM-dd"
            />
            <ErrorMessage
              className={css.errorDateMsg}
              name="date"
              component="span"
            />
            {/* </div> */}
            <Field
              className={css.fieldMsg}
              name="message"
              as="textarea"
              placeholder="Comment"
            />
            <button className={css.submitBtn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default RentCamperForm;
