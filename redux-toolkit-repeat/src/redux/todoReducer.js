import {createAction, createReducer} from "@reduxjs/toolkit"
const initialState = {
    tasks:[
        {
            id: 1,
            text: "Some text 1",
            status: "active"
        },
        {
            id: 2,
            text: "Some text 2",
            status: "completed"
        }
    ],
    filter: "active"
}

export const changeFilterAC = createAction("task/change-filter", (newStatus)=>({
    payload: newStatus
}))
export const tasksReducer = createReducer(initialState, (builder)=>{
builder.addCase(changeFilterAC, (state, action)=>{
    state.filter = action.payload
})
})

