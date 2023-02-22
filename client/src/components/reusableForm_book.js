import React from 'react';
import {
  TextField,
  Button,
} from "@mui/material";
import { Formik, Form ,Field} from "formik";
import * as Yup from "yup";
import { message } from 'antd';
import { Link } from "react-router-dom";



const reusableForm_book = () => {
  const textFieldStyle = { marginTop: "30px" };
  const buttonStyle = { margin: "30px 0",padding:"3.5%", fontSize:'16px', fontFamily:'helvetica'};
  const errorStyle = {color:'#ea6868', fontFamily:'helvetica',fontSize:'15px'}
    const booksSchema = Yup.object().shape({
      bookName: Yup.string().required("Enter Book Name"),
      author: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!"),
      price:Yup.number("only numeric value acceptable")
    });

  return (
        <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={booksSchema}
            onSubmit={ async(values, { resetForm }) => {
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              };
             const res =  await fetch("http://localhost:3001/book", requestOptions);
             const data = await res.json();
             console.log(data)
             if(data){
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
                    label="Book Name"
                    name="bookName"
                    fullWidth
                    required
                    color="success"
                    style={textFieldStyle}
                  />
                   {errors.bookName && touched.bookName ? (
                  <div style={errorStyle}>{errors.bookName}</div>
                  ) : null}
                  <Field as={TextField}
                    label="Author"
                    name="author"
                    fullWidth
                    required
                    color="success"
                    style={textFieldStyle}
                  />
                  {errors.author && touched.author ? (
                  <div style={errorStyle}>{errors.author}</div>
                  ) : null}

                  <Field as={TextField}
                    name="price"
                    label="Price"
                    fullWidth
                    required
                    color="success"
                    type="text"
                    style={textFieldStyle}
                  />
                   {errors.price && touched.price ? (
                  <div style={errorStyle}>{errors.price}</div>
                  ) : null}

                <Button type="submit" variant="contained" color="success" fullWidth style={buttonStyle}>Add</Button>
              </Form>
            )}
          </Formik>
  );
}

export default reusableForm_book
