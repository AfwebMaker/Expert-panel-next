import { configureStore } from '@reduxjs/toolkit';
import layoutConfigReducer from "./features/layout/layoutConfigSlice";
import getExpertInfoReducer from "./features/getExpertInfo/getExpertInfoSlice";


export const store = configureStore({
  reducer: {
    layoutConfig: layoutConfigReducer,
    getExpertInfo: getExpertInfoReducer
  },
});

export default store;