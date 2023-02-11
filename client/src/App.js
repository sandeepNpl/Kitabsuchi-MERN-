import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./containers/auth/Register";
import Login from "./containers/auth/Login";
import BuyerDashboard from "./containers/user/buyerDashboard";
import SellerDashboard from "./containers/user/sellerDashboard";
import { useSelector } from "react-redux";
import NotfoundPage from "./components/notfoundPage";
import AmdinDashboard  from "./containers/admin/adminDashboard"

function App() {
  const { role } = useSelector((state) => state.user);
  if (role === "buyer") {
    return <BuyerScreen />;
  } else if (role === "seller") {
    return  <SellerScreen />;
  } else if (role === "admin") {
    return <AdminScreen/>
  }
  return <AuthenticationScreen />;
}

const AuthenticationScreen = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

const AdminScreen = () => {
  return(
    <Routes>
    <Route path="/" element={<AmdinDashboard/>} />
  </Routes>
  )
  
};

const BuyerScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<BuyerDashboard />} />
    </Routes>
  );
};

const SellerScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<SellerDashboard />} />
    </Routes>
  );
};

export default App;
