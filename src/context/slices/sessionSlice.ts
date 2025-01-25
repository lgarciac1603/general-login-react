import { createSlice } from "@reduxjs/toolkit";

import { SessionState } from "../../interfaces/session";

const initialState: SessionState = {
  id: "",
  name: "",
  admin: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      console.log(state, action);
    },
    unsetSession: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { setSession, unsetSession } = sessionSlice.actions;
export default sessionSlice.reducer;
