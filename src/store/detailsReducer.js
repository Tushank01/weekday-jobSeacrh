import { createSlice } from '@reduxjs/toolkit'

export const detailsReducer = createSlice({
  name: 'details',
  initialState: {
    jbUid: "",
    jobRole: "",
    jobDetailsFromCompany: "",
    location: "",
  },
  reducers: {
    fetchJobDetails: (state, action) => {
      state.jbUid=action.payload.jbUid;
      state.jobRole=action.payload.jobRole;
      state.jobDetailsFromCompany=action.payload.jobDetailsFromCompany;
      state.location=action.payload.location;
    // console.log(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchJobDetails } = detailsReducer.actions

export default detailsReducer.reducer