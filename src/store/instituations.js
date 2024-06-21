import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getInstituations = createAsyncThunk(
  "/instituations",
  async (data, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch("http://localhost:3003/instituations");
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getInstituation = createAsyncThunk(
  "/instituation",
  async (name, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch(`http://localhost:3003/instituations/${name}`);
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getPartners = createAsyncThunk(
  "/partners",
  async (id, thankapi) => {
    const { rejectWithValue } = thankapi;
    try {
      const res = await fetch(
        `http://localhost:3003/instituations/partners/${id}`
      );
      const data = res.json();
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const getSocial = createAsyncThunk("/Social", async (id, thankapi) => {
  const { rejectWithValue } = thankapi;
  try {
    const res = await fetch(`http://localhost:3003/instituations/social/${id}`);
    const data = res.json();
    return data;
  } catch (err) {
    rejectWithValue(err);
  }
});

const instituations = createSlice({
  name: "instituations",
  initialState: {
    instituations: {},
    instituation: {},
    partners: {},
    social: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getInstituations.fulfilled, (state, action) => {
      state.instituations = action.payload;
    });
    builder.addCase(getInstituation.fulfilled, (state, action) => {
      state.instituation = action.payload;
    });
    builder.addCase(getPartners.fulfilled, (state, action) => {
      state.partners = action.payload;
    });
    builder.addCase(getSocial.fulfilled, (state, action) => {
      state.social = action.payload;
    });
  },
});

export default instituations.reducer;
