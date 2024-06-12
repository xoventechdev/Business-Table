import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "businessSlice",
  initialState: {
    businessList: [],
    totalBusiness: 0,
    perPage: 10,
    searchKeyword: "0",
    pageNumber: 1,
  },
  reducers: {
    setBusinessList: (state, action) => {
      state.businessList = action.payload;
    },
    setTotalBusiness: (state, action) => {
      state.totalBusiness = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setBusinessList, setTotalBusiness, setPageNumber } =
  businessSlice.actions;
export default businessSlice.reducer;
