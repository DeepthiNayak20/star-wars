import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";

export const getDataSync: any = createAsyncThunk(
  "starWars/getDataSync",
  async (payload: any) => {
    const response = await fetch(payload);
    if (response.ok) {
      const data = await response.json();
      return { data };
    }
  }
);
export const starSlice = createSlice({
  name: "starWars",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getDataSync.fulfilled]: (state: any, action: any) => {
      return action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = starSlice.actions;

export default starSlice.reducer;
