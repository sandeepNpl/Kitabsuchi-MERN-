import React, { useEffect, useState } from "react";
import Logout from "../../components/logout";
import Modal from "./../../components/modal";
import Drawer from "../../components/drawer";
import FectBooks from "./../../components/fetchData/FetchBooks"
// import { useSelector } from "react-redux";
const AdminDashboard = () => {
  return (
    <div>
      <Logout />
      <Modal />
      <Drawer />
      <FectBooks/>
    </div>
  );
};

export default AdminDashboard;
