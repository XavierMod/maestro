import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../app/features/authenticationSlice";
import TextField from "../library/TextField";
import Button from "../library/Button";
import Text from "../library/styles/Text";
import { BiDownArrowAlt } from "react-icons/bi";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          // same shape as initial values
          try {
            dispatch(
              signin({
                email: values.email,
                password: values.password,
              })
            );
          } catch (err) {
            alert("uo");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ position: "relative" }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              change={(el) => console.log(el)}
            />
            <TextField
              style={{ marginBottom: "15px" }}
              label="Password"
              name="password"
              type="password"
              placeholder="First name"
              change={(el) => console.log(el)}
            />
            <Text style={{ marginBottom: "40px" }}>
              I've forgotten my password
            </Text>
            <Text>{JSON.stringify(error)}</Text>

            <Button
              style={{ position: "absolute", right: 0, bottom: 0 }}
              type="submit"
              className="icon"
            >
              <BiDownArrowAlt style={{ rotate: "-90deg" }} />
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
