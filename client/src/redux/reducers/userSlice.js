import {
    ADD_USER_DETAILS, LOGOUT_RESET_DETAILS,
  } from "../actionTypes/actionTypes";
  
  const initialState = {
    role: "",
    email: "",
    name: "",
  };
  
  const userSlice = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_DETAILS:
        const { name, role, email } = action.payload;
        return {
          ...state,
          role,
          name,
          email,
        };
      case LOGOUT_RESET_DETAILS:
          return{
              ...state,
              role:"",
              name:"",
              email:"",
          }
      default:
        return state;
    }
  };
  
  export default userSlice;
  

