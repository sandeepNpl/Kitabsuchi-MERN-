import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Register from './containers/auth/Register';
import Login from './containers/auth/Login';


function App() {
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

export default App

