import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetchAPI } from "../hooks/useFetchAPI";

export const fetchUpcomingRockets = createAsyncThunk(
  "rocket/fetchUpcomings",
  async (url) => {
    const response = await useFetchAPI(url);
    return response;
  },
);

export const fetchRocketLaunch = createAsyncThunk(
  "rocket/fetchLaunch",
  async (url) => {
    const response = await useFetchAPI(url);
    return response;
  },
);

const rocketSlice = createSlice({
  name: "rocket",
  initialState: {
    data: [],
    loading: true,
    error: null,
    next: "",
    launchData: {},
    route: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingRockets.pending, (state, action) => {
        if (state.loading === false) {
          state.loading = true;
        }
      })
      .addCase(fetchUpcomingRockets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload.results];
        state.next = action.payload.next;
      });

    builder
      .addCase(fetchRocketLaunch.pending, (state, action) => {
        if (state.loading === false) {
          state.loading = true;
        }
      })
      .addCase(fetchRocketLaunch.fulfilled, (state, action) => {
        state.loading = false;
        state.launchData = action.payload;
      });
  },
});

export default rocketSlice.reducer;
