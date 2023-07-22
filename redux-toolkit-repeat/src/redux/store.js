import { configureStore } from "@reduxjs/toolkit";
import {tasksReducer} from "./todoReducer";

const store = configureStore({
    reducer:{
        tasks: tasksReducer
    }
})

export default store