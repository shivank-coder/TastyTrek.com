import { createSlice } from "@reduxjs/toolkit";

const initialState = {
firstName:"",
lastName:"",
email:"",
image:"",
_id:"",


};

export const userSlice = createSlice({
  name: "user",
  initialState, // Fix the typo here
  reducers: {
    login: (state, action) => {
      console.log(action.payload.data);
    //   state.user=action.payload.data;
    state._id=action.payload._id;
    state.firstName=action.payload.firstName;

    state.lastName=action.payload.lastName;
    state.email=action.payload.email;

    state.image=action.payload.image;

    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
