import { createSlice } from "@reduxjs/toolkit";

const dropMenu = createSlice({
  name: "menu",
  initialState: {
    menu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { toggleMenu } = dropMenu.actions;
export default dropMenu.reducer;
