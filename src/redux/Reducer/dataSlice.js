import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../service/axios";

export const getData = createAsyncThunk("data/getData", async () => {
  const data = await myAxios.get("jewelry");
  return data.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
