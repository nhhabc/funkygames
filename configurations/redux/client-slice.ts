import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    currentContentSection: ""
  },
  reducers: {
    setCurrentContentSection(state, action) {
      state.currentContentSection = action.payload;
    }
  }
})

export const clientAction = clientSlice.actions