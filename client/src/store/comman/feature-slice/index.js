import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getfeatureImages = createAsyncThunk(
  "/addresses/getfeatureImages",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/common/feature/get"
    );
    return response?.data;
  }
);
export const addfeatureImage = createAsyncThunk(
  "/addresses/addfeatureImage",
  async (image) => {
    const response = await axios.post(
      "http://localhost:5000/api/common/feature/add",
      { image }
    );
    return response?.data;
  }
);

const commanSlice = createSlice({
  name: "commanSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getfeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getfeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action?.payload?.data;
      })
      .addCase(getfeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      });
  },
});
export default commanSlice.reducer;
