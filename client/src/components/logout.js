import React from 'react'
import {logoutResetDetails} from '../redux/actions/userAction'
import {useDispatch} from 'react-redux'
const Logout = () => {
    const dispatch = useDispatch();
    const triggerLogout = () =>{
        dispatch(logoutResetDetails())
      }
  return (
    <div>
       <button onClick={() => triggerLogout()}>Log out</button>
    </div>
  )
}

export default Logout
