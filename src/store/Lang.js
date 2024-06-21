import { createSlice } from "@reduxjs/toolkit";

const Lang = createSlice({
  name: "Lang",
  initialState: {
    Arabic: true,
  },
  reducers: {
    changeLang: (state) => {
      state.Arabic = !state.Arabic;
    },
  },
});

export const { changeLang } = Lang.actions;
export default Lang.reducer;
