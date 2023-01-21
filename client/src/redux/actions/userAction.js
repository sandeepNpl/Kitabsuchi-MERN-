import {
    ADD_USER_DETAILS,LOGOUT_RESET_DETAILS
  } from "../actionTypes/actionTypes";
  
  export const addUserDetails = (userDetails) => (dispatch) => {
    dispatch({
      type: ADD_USER_DETAILS,
      payload: userDetails,
    }); 
  };


 export  const logoutresetDetails = (userDetails) => (dispatch) =>{
    dispatch({
      type: LOGOUT_RESET_DETAILS,
      payload: userDetails,
    })
  }

