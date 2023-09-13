import { configureStore } from '@reduxjs/toolkit';
import layoutConfigReducer from "./features/layout/layoutConfigSlice";


export const store = configureStore({
  reducer: {
    layoutConfig: layoutConfigReducer
  },
});

export default store;