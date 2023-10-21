import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
}

const profileBaseSlice = createSlice({
    name: "profileBase",
    initialState,
    reducers: {
        fetchUserHandler: (state, actions) => {
            state.user = actions.payload
        },
    }
});

export default profileBaseSlice.reducer;
export const { fetchUserHandler } = profileBaseSlice.actions
