import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logUserIn: (state) => {
      state.isLoggedIn = true;
    },
    logUserOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logUserIn, logUserOut } = authSlice.actions;

export default authSlice.reducer;
