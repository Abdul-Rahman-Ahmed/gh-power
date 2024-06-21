import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
  "/projects",
  async (param, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch("https://ghpower-1.onrender.com/allprojects");
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getProject = createAsyncThunk(
  "/project",
  async (name, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch(
        `https://ghpower-1.onrender.com/projects/${name}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const projects = createSlice({
  name: "projects",
  initialState: {
    projects: {},
    project: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(getProject.fulfilled, (state, action) => {
      state.project = action.payload;
    });
  },
});

export default projects.reducer;
