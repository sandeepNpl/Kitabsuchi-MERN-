
import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Formik, Form, Field } from "formik";
import { addUserDetails } from "../../redux/actions/userAction";
import * as Yup from "yup";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/style.css";
import NavBar from "../../components/navbar";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paperStyle = {
    padding: 20,
    height: "125vh",
    width: 320,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#2e7d32" };
  const textFieldStyle = { marginTop: "30px" };
  const buttonStyle = {
    margin: "30px 0",
    padding: "3.5%",
    fontSize: "16px",
    fontFamily: "helvetica",
  };

  const selectFieldStyle = {
    padding: "16px 107px",
    marginTop: "30px",
    border: "1px solid #8c8c8c",
    borderRadius: "5px",
  };
  const errorStyle = {
    color: "#ea6868",
    fontFamily: "helvetica",
    fontSize: "15px",
  };
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter a first name"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter a last name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter a  email"),
    role: Yup.string().required("Please choose account type"),
    password: Yup.string()
      .min(6, "6 character minimum")
      .required("Password is required"),
    confirmPassword: Yup.string().required("Confirm password is required"),
  });

  return (
    <Grid>
      <NavBar />
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { resetForm }) => {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            };

            try {
              const res = await fetch(
                "http://localhost:3001/register",
                requestOptions
              );
              const data = await res.json();
              if (res.status === 409) {
                message.error(data.msg, [2]);
              } else {
                message.success(data.msg, [2]);
                navigate("/");
              }
              resetForm({ values: "" });
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                label="First Name"
                name="firstName"
                fullWidth
                required
                color="success"
                style={textFieldStyle}
              />
              {errors.firstName && touched.firstName ? (
                <div style={errorStyle}>{errors.firstName}</div>
              ) : null}

              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                fullWidth
                required
                color="success"
                style={textFieldStyle}
              />
              {errors.lastName && touched.lastName ? (
                <div style={errorStyle}>{errors.lastName}</div>
              ) : null}

              <Field
                as={TextField}
                label="Email"
                name="email"
                fullWidth
                required
                color="success"
                style={textFieldStyle}
              />
              {errors.email && touched.email ? (
                <div style={errorStyle}>{errors.email}</div>
              ) : null}

              <Field
                as={TextField}
                name="password"
                label="Password"
                fullWidth
                required
                color="success"
                type="password"
                style={textFieldStyle}
              />
              {errors.password && touched.password ? (
                <div style={errorStyle}>{errors.password}</div>
              ) : null}

              <Field
                as={TextField}
                name="confirmPassword"
                label="Confirm Password"
                fullWidth
                required
                color="success"
                type="password"
                style={textFieldStyle}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div style={errorStyle}>{errors.confirmPassword}</div>
              ) : null}

              <Field as="select" name="role" style={selectFieldStyle}>
                <option value="">Account Type</option>
                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
              </Field>
              {errors.role && touched.role ? (
                <div style={errorStyle}>{errors.role}</div>
              ) : null}
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                style={buttonStyle}
              >
                REGISTER
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          Do you have an account?
          <Link to="/">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Register;
