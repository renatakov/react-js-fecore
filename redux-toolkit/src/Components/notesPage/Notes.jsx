import {useDispatch, useSelector} from "react-redux"
import { addNote, deleteNote } from "../../redux/reducers/notesReducer"
import React from "react"
import { useMemo } from "react"
// useMemo - это хук, который сохраняет результат вызова функции (первый аргумент)
//  и пересчитывает его только при изменении зависимостей (второй аргумент). 
//  useMemo возвращает результат вызова первого аргумента.
const Notes = () =>{
    //useSelector - бере state зі store.js
    //useDispatch - ф-ції з notesReducer
    const notes = useSelector((state)=>state.notesPage.notes)
    const dispatchForNotes = useDispatch()
    const notesCollection = useMemo(()=>notes.map((note)=> <div
    key={`id-${note.id}`}>
        <h2>{note.title}</h2>
        <p>{note.text}</p>
        <button onClick={()=>{dispatchForNotes(deleteNote(note.id))}}>Delete</button>
    </div>), [notes])

const inputTitle = React.createRef()
const inputText = React.createRef()
const handleAddNote = () => {
    if(inputTitle.current.value !== "" && inputText.current.value !== ""){
        dispatchForNotes(addNote(inputTitle.current.value, inputText.current.value))
    } else{
        alert("Fill all text fields")
    }
    inputTitle.current.value = ""
    inputText.current.value = ""
}

    return(
        <>
        <h1>Notes</h1>
        <div>
        {notesCollection}
        </div>
        <input ref={inputTitle} placeholder="Write Note Title"/>
        <input ref={inputText} placeholder="Write Note Text"/>
        <button onClick={handleAddNote}>Create</button>
        </>
    )
}

export default Notes;