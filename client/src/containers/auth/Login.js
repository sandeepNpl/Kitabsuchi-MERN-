import React from "react";
import Button from "../../components/Button";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../../assets/styles/style.css";

const Login = () => {
  const usersSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),

    password: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  const  getStyles =(errors) => {
    if (errors.password) {
      return {
        border: "1px solid red",
      };
    }
  }

  return (
    <>
      <div className="container">
        <div className="form-box">
        <h1>Login</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={usersSchema}
            onSubmit={(values, { resetForm }) => {
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              };
              fetch("http://localhost:3005/login", requestOptions);
              console.log(values);
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <Field
                    style={getStyles(errors)}
                    className="field"
                    name="email"
                    placeholder="Email "
                  />
                  {errors.email && touched.email ? (
                    <div className="errorStyle">{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    style={getStyles(errors)}
                    className="field"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div className="errorStyle">{errors.password}</div>
                  ) : null}
                </div>
                <Button name="Submit" type="submit" />
              </Form>
            )}
          </Formik>
          <div className="">
            <span>
              <Link to="/register">Create an account </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
