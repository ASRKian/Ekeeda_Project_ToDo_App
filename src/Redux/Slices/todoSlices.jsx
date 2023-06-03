import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addToDo(state, action) {
            let todo = (action.payload).trim();
            if (todo != "") {
                state.push(todo);
            }
        },
        clearToDo(state) {
            state.length = 0;
        },
        deleteToDo(state, action) {
            state.splice(action.payload, 1);
        }
    }
})

export const { addToDo, clearToDo, deleteToDo } = todoSlice.actions
export default todoSlice.reducer