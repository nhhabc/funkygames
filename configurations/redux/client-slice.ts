import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    currentContentSection: "",
    currentProvider: {
      name: "Seamless",
      id: "",
      img: null,
    },
  },
  reducers: {
    setCurrentContentSection(state, action) {
      state.currentContentSection = action.payload;
    },
    setCurrentProvider(state, action) {
      state.currentProvider = action.payload;
    },
  }
})

export const clientAction = clientSlice.actions