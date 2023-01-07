import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../../assets/styles/style.css";
import Button from "../../components/Button";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter a first name"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter a last name"),
  email: Yup.string().email("Invalid email").required("Please enter a  email"),
  role:Yup.string().required("Please choose account type"),
  password: Yup.string()
    .min(6, "6 character minimum")
    .required("Password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});

const Register = () => {
  function getStyles(errors) {
    if (errors.firstName) {
      return {
        border: "1px solid red",
      };
    }
  }
  return (
    <div className="container">
      <div className="form-box">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            role:"",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form">
              <Field
                style={getStyles(errors)}
                className="field"
                name="firstName"
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName ? (
                <div className="errorStyle">{errors.firstName}</div>
              ) : null}

              <br />
              <Field
                style={getStyles(errors)}
                className="field"
                name="lastName"
                placeholder="Last Name"
              />

              {errors.lastName && touched.lastName ? (
                <div className="errorStyle">{errors.lastName}</div>
              ) : null}

              <br />

              <Field
                style={getStyles(errors)}
                className="field"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              {errors.email && touched.email ? (
                <div className="errorStyle">{errors.email}</div>
              ) : null}
              <br />

              <Field
                style={getStyles(errors)}
                className="field"
                name="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div className="errorStyle">{errors.password}</div>
              ) : null}
              <br />

              <Field
                style={getStyles(errors)}
                className="field"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="errorStyle">{errors.confirmPassword}</div>
              ) : null}
              <br />

              <Field as="select"  name="role"  className ="accType" placeholder="Account Type">
                  <option value="" >Account Type</option>
                  <option value="buyer">buyer</option>
                  <option value="seller">seller</option>
                </Field>
              {errors.role && touched.role ? (
                <div className="errorStyle">{errors.role}</div>
              ) : null}

              <br />

              <Button name="Create Account" type="submit" />
              <div className="">
                <span style={{fontSize:"20px"}}>
                  Already have an account <Link to="/">Login..</Link>
                </span>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
