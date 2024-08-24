import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    displayedItem: {}
  },
  reducers: {
    changeDisplayedItem: (state, action) => {
      state.displayedItem = action.payload;
    }
  }
})

export const { changeDisplayedItem } = detailSlice.actions;
export default detailSlice.reducer