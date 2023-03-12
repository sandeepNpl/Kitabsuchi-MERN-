import React from "react";
import { useSelector } from "react-redux";
import "../../assets/styles/style.css";
import Avatar from "../../components/avatar";
import Fetch from "../../components/fetchData/FetchBooks";
import Logo from "./../../components/header/logo/Logo";
import Navbar from "../../components/header/navbar/Navbar";
import LeftSide from "../../components/mainSection/leftSide/LeftSide";
import RightSide from "../../components/mainSection/rightSide/RightSide";
import { textAlign } from "@mui/system";

const BuyerDashboard = () => {
  const { email } = useSelector((state) => state.user);
  const name = email.split("@");
  return (
    <>
      <div className="container" style={{ width: "80%", margin: "auto" }}>
        <div className="header-section">
          <div>
            <Logo />
          </div>
          <div>
            <Navbar />
          </div>
          {/* <div c>lassName="avatarBox">
            <Avatar />
            Hii <b>{name[0]}...!</b>
          </div> */}
        </div>

        <div
          className="main-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4%",
          }}
        >
          <div className="">
            <LeftSide />
          </div>
          <div className="">
            <RightSide />
          </div>
        </div>

        <div>{/* <Fetch /> */}</div>
      </div>
    </>
  );
};

export default BuyerDashboard;
