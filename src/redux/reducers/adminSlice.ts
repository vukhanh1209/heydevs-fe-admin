import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

const initialState = {
  isOpeningSidebar: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    onDisplaySidebar: (state) => {
      if (state.isOpeningSidebar === true) state.isOpeningSidebar = false;
      else state.isOpeningSidebar = true;
    },
  },
  extraReducers: (builder) => {},
});
export default adminSlice.reducer;

export const { onDisplaySidebar } = adminSlice.actions;

export const selectIsOpeningSidebar = (state: RootState) =>
  state.admin.isOpeningSidebar;
