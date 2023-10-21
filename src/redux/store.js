import { configureStore } from '@reduxjs/toolkit';
import layoutConfigReducer from "./features/layout/layoutConfigSlice";
import profileBaseReducer from "./features/profileBase/profileBaseSlice";


export const store = configureStore({
  reducer: {
    layoutConfig: layoutConfigReducer,
    profileBase: profileBaseReducer
  },
});

export default store;