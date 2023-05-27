import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoggedIn:false,
email:null,
userName:null,
userID:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state,action)=>{
          console.log((action.payload));
          const {email,userName,userID}=action.payload
          state.isLoggedIn=true;
          state.userName=userName;
          state.email=email;
          state.userID=userID;
    },
  },
});

export const {SET_ACTIVE_USER} = authSlice.actions

export const selectIsLoggedIn=(state)=>state.auth.isLoggedIn
export const selectUserName=(state)=>state.auth.userName
export const selectEmail=(state)=>state.auth.email
export const selectID=(state)=>state.auth.userID

export default authSlice.reducer