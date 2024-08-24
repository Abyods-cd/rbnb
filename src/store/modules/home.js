import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTabsData, getIconsData, getPastExperienceData, getHomeFooterData } from "@/service/modules/home";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    selectedItem: { imgUrl: "", title: "" },
    currentTab: {},
    tabsData:[],
    iconsData: [],
    pastExperienceData: [],
    homeFooterData: []
  },
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    changeTabsDataAction(state, action) {
      state.tabsData = action.payload
    },
    changeIconsDataAction(state, action) {
      state.iconsData = action.payload
    },
    changePastExperienceDataAction(state, action) {
      state.pastExperienceData = action.payload
    },
    changeHomeFooterDataAction(state, action) {
      state.homeFooterData = action.payload
    }
  }
})

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData', (payload, { dispatch }) => {
    getTabsData().then(res => {
      dispatch(changeTabsDataAction(res))
    })
    getIconsData().then(res => {
      dispatch(changeIconsDataAction(res))
    })
    getPastExperienceData().then(res => {
      dispatch(changePastExperienceDataAction(res))
    })
    getHomeFooterData().then(res => {
      dispatch(changeHomeFooterDataAction(res))
    })
    
  }
)


export const { setSelectedItem, setCurrentTab, changeTabsDataAction, changeIconsDataAction, changePastExperienceDataAction, changeHomeFooterDataAction } = homeSlice.actions;

export default homeSlice.reducer