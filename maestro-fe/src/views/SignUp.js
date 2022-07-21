import { Formik, useFormikContext } from "formik";
import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Yup from "yup";
import SignUpLanding from "../components/SignUp/SignUpLanding";
import SignUpProfile from "../components/SignUp/SignUpProfile";
import LandingLayout from "../layouts/LandingLayout";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number().max(2, "Too Long!").required("Required"),
  roles: Yup.array().required("Required"),
  genres: Yup.array().required("Required"),
});

const SignUp = () => {
  return (
    <LandingLayout>
      <Formik
        initialValues={{
          email: "",
          username: "",
          age: "",
          roles: ["guitar", "bass", "trumpet"],
          genres: ["punk rock", "rock", "jazz"],
          bio: "",
          links: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {}}
      >
        <Routes>
          <Route index element={<SignUpLanding />} />
          <Route path="profile" element={<SignUpProfile />} />
        </Routes>
      </Formik>
    </LandingLayout>
  );
};

export default SignUp;
