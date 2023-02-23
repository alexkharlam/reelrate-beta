import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { idToken: null, isAuthed: false },
  reducers: {
    login(state, action) {
      console.log(action);
    },
    logout(state) {},
  },
});

export const authActions = authSlice.actions;
export default authSlice;
