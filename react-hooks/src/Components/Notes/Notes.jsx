import { useState, useEffect, useRef } from "react";
import Note from "./Note/Note";
const Notes = () =>{
const [notesStore, setNotes] = useState([
    {
        id: "id-1",
        title: "Note 1",
        text: "First note",
    }, 
    {
        id: "id-2",
        title: "Note 2",
        text: "Second note",
    }
]);
let form = {
    inputText: useRef(null),
    inputTitle: useRef(null),
    btnAdd: useRef(null),
}
useEffect(() => {
    form.btnAdd.current.addEventListener(("click"), () => {
        setNotes([
            ...notesStore,
            {
                id: notesStore[notesStore.length - 1].id + 1,
                title: form.inputTitle.current.value,
                text: form.inputText.current.value
            }
        ])
        
    })
})
let notesStoreCollection = notesStore.map((note) => 
<Note
key={note.id}
title={note.title}
text={note.text}
/>
);
return(
    <div>
        {notesStoreCollection}
        <div className="form">
            <input placeholder="Write New Title" ref={form.inputTitle} type="text" />
            <input placeholder="Write New Text" ref={form.inputText} type="text" />
            <button ref={form.btnAdd}>Add</button>
        </div>
    </div>
)
}
export default Notes;