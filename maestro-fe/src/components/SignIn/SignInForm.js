import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signin } from "../../app/features/authenticationSlice";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Required"),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>SignIn</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          // same shape as initial values
          dispatch(signin({
            email: values.email,
            password: values.password
          }));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
