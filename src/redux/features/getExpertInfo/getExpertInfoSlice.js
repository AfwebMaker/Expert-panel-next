import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    activeData: typeof window !== 'undefined' && (JSON.parse(localStorage.getItem('activeData')) ? JSON.parse(localStorage.getItem('activeData')) : null)
    // activeData: JSON.parse(localStorage.getItem('activeData')) ? JSON.parse(localStorage.getItem('activeData')) : null
}


const getExpertInfoSlice = createSlice({
    name: "getExpertInfo",
    initialState,
    reducers: {
        fetchUserHandler: (state, actions) => {
            state.user = actions.payload
        },
        fetchActiveDataHandler: (state, actions) => {
            state.activeData = actions.payload
        },
    }
});

export default getExpertInfoSlice.reducer;
export const { fetchUserHandler, fetchActiveDataHandler } = getExpertInfoSlice.actions
