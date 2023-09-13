import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    toggleSidebar: true
}

const layoutConfigSlice = createSlice({
    name: "layoutConfig",
    initialState,
    reducers: {
        toggleSidebarHandler: (state) => {
            state.toggleSidebar = !state.toggleSidebar
        },
    }
});

export default layoutConfigSlice.reducer;
export const { toggleSidebarHandler } = layoutConfigSlice.actions
