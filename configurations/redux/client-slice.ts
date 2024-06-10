import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    currentContentSection: "",
    currentProvider: {
      name: "Select Provider",
      id: "",
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