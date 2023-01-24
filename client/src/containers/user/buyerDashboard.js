import React from "react";
import { useDispatch } from "react-redux";
import Logout from "../../components/logout";
import Avatar from "../../components/avatar";
import Navbar from "../../components/navbar";
import "../../assets/styles/style.css";
import {useSelector}  from 'react-redux'

const BuyerDashboard = () => {
  const {email} = useSelector(state=>state.user)
  const name = email.split('@')
  return (
    <div className="header">
      <Navbar />
      <div className="avatarBox">
        <Avatar />
        Hii <b>{name[0]}...!</b>
      </div>
    </div>
  );
};

export default BuyerDashboard;
