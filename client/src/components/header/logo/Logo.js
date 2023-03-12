import React from "react";
import logo from "../../../assets/images/main-logo.png";
import "./logo.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Logo = () => {
  return (
    <div className="header-container">
      <div className="logo-contaier">
        <img src={logo} width="20%" />
      </div>
      <div className="login-part">
        <button className="login-button">
          <Link to="/login" className="link">Login</Link>
        </button>

        <div className="Welcome-text">Welcome to Kitab Suchi</div>
      </div>
    </div>
  );
};

export default Logo;
