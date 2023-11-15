import { configureStore } from '@reduxjs/toolkit';
import layoutConfigReducer from "./features/layout/layoutConfigSlice";
import getExpertInfoReducer from "./features/getExpertInfo/getExpertInfoSlice";
import staticVariableReducer from "./features/staticVariable/staticVariableSlice";


export const store = configureStore({
  reducer: {
    layoutConfig: layoutConfigReducer,
    getExpertInfo: getExpertInfoReducer,
    staticVariable: staticVariableReducer,
  },
});

export default store;