import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todoSlices";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})

export default store