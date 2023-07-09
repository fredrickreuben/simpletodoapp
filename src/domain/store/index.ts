import todoSlice from "../slices/todo"
import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    }
})

export type IRootState = ReturnType<typeof store.getState>

export default store