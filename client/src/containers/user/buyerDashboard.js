import React from 'react'
import {useDispatch} from 'react-redux'
import {logoutresetDetails} from '../../redux/actions/userAction'

const BuyerDashboard = () => {
  const dispatch = useDispatch()
  const triggerLogout = () =>{
    dispatch(logoutresetDetails)
  }
  return (
    <div>
      I am the buyer dashboard
      <button onClick={triggerLogout()}>Log out</button>
    </div>
  )
}

export default BuyerDashboard
