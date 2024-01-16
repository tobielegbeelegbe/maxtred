import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: null,
  projects: [],
  loading: false,
};

export const getProjects = createAsyncThunk("projects/get", async () => {
  const res = await axios.get("/api/project/all");
  return res.data;
});

const projectSlice = createSlice({
  initialState,
  name: "projects",
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, actions) => {
        state.loading = false;
        state.projects = actions.payload;
      })
      .addCase(getProjects.rejected, (state, actions) => {
        state.loading = false;
        state.projects = [];
        state.error = actions.error.message;
      });
  },
});

export const userReducer = projectSlice.reducer;
