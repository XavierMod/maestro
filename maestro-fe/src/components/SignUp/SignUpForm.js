import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "../library/TextField";
import Button from "../library/Button";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUpForm = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <TextField
            label="First name"
            name="firstName"
            maxLength={10}
            type="text"
            placeholder="First name"
            change={(el) => console.log(el)}
          />
          <TextField
            name="lastName"
            type="text"
            placeholder="Last name"
            change={(el) => console.log(el)}
          />
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            change={(el) => console.log(el)}
          />
          <Button type="submit" className="gorod accent_2">Click me</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUpForm;
