import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDetailsSync: any = createAsyncThunk(
  "starDetails/getDetailsSync",
  async (payload: any) => {
    const response = await fetch(payload);
    if (response.ok) {
      const datas = await response.json();
      console.log(datas);
      return { datas };
    }
  }
);
export const detailsSlice = createSlice({
  name: "starDetails",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getDetailsSync.fulfilled]: (state: any, action: any) => {
      return action.payload.datas;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = detailsSlice.actions;

export default detailsSlice.reducer;
