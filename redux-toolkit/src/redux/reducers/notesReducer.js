import { createAction, nanoid, createReducer } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        {
            id: 1,
            title: "Note 1",
            text: "This is first note"
        },
        {
            id: 2,
            title: "Note 2",
            text: "This is second note"
        }
    ]
}

export const deleteNote = createAction("note/delete", (idToDelete)=>({
    payload:{
        idToDelete
    }
}))

export const addNote = createAction("notes/add", (title, text) => ({
    payload:{
        title,
        text,
        id: nanoid()
    }
}))
const notesReducer = createReducer(initialState, (builder)=>{
    builder.addCase(addNote, (state, action) =>{
        state.notes = [
            ...state.notes,
            action.payload
        ]
    })
    builder.addCase(deleteNote, (state, action) => {
        state.notes = state.notes.filter(note => note.id !== action.payload.idToDelete)
        
    })
})
export default notesReducer;

//createAction(type, function)