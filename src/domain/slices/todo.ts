import { ITodo } from '../models/todo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "todo",
    initialState: new Array<ITodo>(),
    reducers: {
        addTodo(state, action: PayloadAction<ITodo>) {
            state.push(action.payload)
        },
        toogleTodo(state, action: PayloadAction<string>) {
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : { ...todo }
            )
        },
        deleteTodo(state, action: PayloadAction<string>) {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, toogleTodo, deleteTodo } = slice.actions

export default slice