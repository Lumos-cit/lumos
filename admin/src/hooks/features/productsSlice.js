import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    contentType: "Currency",
  },
  reducers: {
    changeContentType: (state, action) => {
      state.contentType = action.payload;
    },
  },
});

export const { changeContentType } = productSlice.actions;

export default productSlice.reducer;
