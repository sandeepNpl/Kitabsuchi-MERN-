import React from 'react'
import Avatar from '../../components/avatar';
import SendOrders  from '../../components/sendOrders/sendOrders';


const sellerDashboard = () => {
  return (
    <>
    <div className='header'>
    {/* <Avatar/> */}
    <SendOrders/>
    </div>
      I am the seller dashboard
    </>
  )
}

export default sellerDashboard
