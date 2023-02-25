import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { idToken: null, isAuthed: false, localId: null },
  reducers: {
    login(state, { payload }) {
      console.log(payload.localId);
      state.idToken = payload.idToken;
      state.isAuthed = true;
      state.localId = payload.localId;
    },
    logout(state) {
      state.idToken = null;
      state.isAuthed = false;
      state.localId = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
