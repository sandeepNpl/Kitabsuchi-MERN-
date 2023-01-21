import {
    ADD_USER_DETAILS, REMOVE_USER_DETAILS,
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
      case REMOVE_USER_DETAILS:
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
  

