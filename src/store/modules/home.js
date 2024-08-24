import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    selectedItem: { imgUrl: "", title: "" },
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    }
  }
})


export const { setSelectedItem } = homeSlice.actions;
export default homeSlice.reducer