
import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Formik, Form ,Field} from "formik";
import * as Yup from "yup";
import { addUserDetails } from "../../redux/actions/userAction";
import {useDispatch} from 'react-redux';
import { message } from 'antd';
import { Link } from "react-router-dom";
import "../../assets/styles/style.css";
// import { padding } from "@mui/system";
import NavBar from '../../components/navbar'

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#2e7d32" };
  const textFieldStyle = { marginTop: "30px" };
  const buttonStyle = { margin: "30px 0",padding:"3.5%", fontSize:'16px', fontFamily:'helvetica'};
  const errorStyle = {color:'#ea6868', fontFamily:'helvetica',fontSize:'15px'}

  const dispatch  =  useDispatch();
    const usersSchema = Yup.object().shape({
      email: Yup.string()
        .email("Enter Valid Email"),
      password: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
    });
 
  return (
    <Grid>
     <NavBar/>
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={usersSchema}
            onSubmit={ async(values, { resetForm }) => {
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              };
             const res =  await fetch("http://localhost:3001/login", requestOptions);
             const data = await res.json();
             if(data.userData){
              dispatch(addUserDetails(data.userData));
              message.success(data.msg, [2])
             }else{
              message.error(data.msg, [2])
             }
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                  <Field as={TextField}
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
                  <Field as={TextField}
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
                <Button type="submit" variant="contained" color="success" fullWidth style={buttonStyle}>SIGN IN</Button>
              </Form>
            )}
          </Formik>
        <Typography>
          Do you have an account?
          <Link to="/register">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
