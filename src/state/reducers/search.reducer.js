import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    // define initial list to be empty or default static values me,isSupervisor is state variable
    info: {},
  },
  reducers: {
    //to create an action to update state variable called list in the initial State
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

//to expose actions that can be called from any where in the application
export const { setInfo } = searchSlice.actions;

//to expose selectors when components need store values in store
export const SearchInfoSelector = (state) => state.searchSlice.info;

export default searchSlice.reducer;
