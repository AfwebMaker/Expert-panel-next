import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    toggleSidebar: true,
    isLoading: false
}

const layoutConfigSlice = createSlice({
    name: "layoutConfig",
    initialState,
    reducers: {
        toggleSidebarHandler: (state) => {
            state.toggleSidebar = !state.toggleSidebar
        },
        loadingHandler: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export default layoutConfigSlice.reducer;
export const { toggleSidebarHandler, loadingHandler } = layoutConfigSlice.actions
