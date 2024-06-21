import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getConferences = createAsyncThunk(
  "/conferences",
  async (data, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch("https://ghpower-1.onrender.com/conferences");
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getConference = createAsyncThunk(
  "/conference",
  async (name, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch(
        `https://ghpower-1.onrender.com/conferences/${name}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getSponsers = createAsyncThunk(
  "/sponsers",
  async (name, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch(
        `https://ghpower-1.onrender.com/conferences/sponsers/${name}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const conferences = createSlice({
  name: "conferences",
  initialState: {
    conferences: {},
    conference: {},
    sponsers: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getConferences.fulfilled, (state, action) => {
      state.conferences = action.payload;
    });
    builder.addCase(getConference.fulfilled, (state, action) => {
      state.conference = action.payload;
    });
    builder.addCase(getSponsers.fulfilled, (state, action) => {
      state.sponsers = action.payload;
    });
  },
});

export default conferences.reducer;
