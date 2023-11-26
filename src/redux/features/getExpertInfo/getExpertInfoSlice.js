import { createSlice } from "@reduxjs/toolkit"

const initialState = () => {
    try {
        return  {
            user: {},
            activeData: JSON.parse(localStorage.getItem('activeData')) ? JSON.parse(localStorage.getItem('activeData')) : null
        };
    }
    catch (e) {
        return {
            user: {},
            activeData: {}
        }
    }
}


const getExpertInfoSlice = createSlice({
    name: "getExpertInfo",
    initialState:initialState(),
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
