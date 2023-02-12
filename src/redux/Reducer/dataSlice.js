import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../service/axios";

const getData = createAsyncThunk('data/getData', async () => {
console.log('log')

  const data = await myAxios.get("jewelry");
  return data.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        console.log('aa')
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        console.log('dd')
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
