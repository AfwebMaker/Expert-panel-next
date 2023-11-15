import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    type_job: [
        { id: 1, text: "فنی و آیتمی" },
        { id: 2, text: "روز مزد" },
        { id: 3, text: "خدمات فوری" },
        { id: 4, text: "خرده کار" },
        { id: 5, text: "پیمان کار" },
        { id: 6, text: "بازسازی" }
    ],

}

const staticVariableSlice = createSlice({
    name: "staticVariable",
    initialState,
});

export default staticVariableSlice.reducer;
