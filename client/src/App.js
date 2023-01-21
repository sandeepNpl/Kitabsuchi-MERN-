import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Register from './containers/auth/Register';
import Login from './containers/auth/Login';
import BuyerDashboard from './containers/user/buyerDashboard';
import SellerDashboard from './containers/user/sellerDashboard';
import {useSelector}  from 'react-redux'


function App() {
  const {role} =useSelector(state=>state.user)
  if(role === 'buyer'){
    return <BuyerScreen/>
  }else if(role === 'seller'){
    return <SellerScreen/>
  }
  return <AuthenticationScreen/>
}

 const AuthenticationScreen = () => {
    return (
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
    </Routes>
    )
  }


  const BuyerScreen = () => {
    return(
      <Routes>
      <Route path="/" element={<BuyerDashboard />} />
      </Routes>
    )
  }

  const SellerScreen = () => {
    return(
      <Routes>
      <Route path="/" element={<SellerDashboard />} />
      </Routes>
    )
  }

export default App

