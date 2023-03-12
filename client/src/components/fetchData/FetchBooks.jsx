import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./fetchBooks.css";
// import { useSelector } from "react-redux";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const AdminDashboard = () => {
  const [validBooks, setValidBooks] = useState([]);
  const fetchAvailableBooks = () => {
    axios.get("http://localhost:3001/book").then((response) => {
      setValidBooks(response.data.validBooks);
    });
  };
  useEffect(() => {
    fetchAvailableBooks();
  }, []);

  return (
    <>
      <div className="books_grid" onClick={()=>{alert("book description")}}>
        {validBooks.map((item, id) => {
          return <Card item={item} />;
        })}
      </div>
    </>
  );
};

export default AdminDashboard;
