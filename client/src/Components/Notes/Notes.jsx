import Note from "./Note/Note"
import React from "react";
import s from "./Notes.module.css"
 const Notes = (props) => {
    let notesStore = props.notesStore;
    let NoteElement = notesStore.map((note, index) =>{
        return <Note key={`note${index}`} theme={note.theme} text={note.text}/>
    })
    let inputRef = React.createRef()
    const createNewNote = ()=>{
        alert(inputRef.current.value)
        notesStore.push({
            text: inputRef.current.value,
            theme: null
        })
        props.rerender(notesStore)
        inputRef.current.value = null
    }
    console.log(NoteElement)
    return(
        <>
        {NoteElement}
        <div className={s.form}>
            <input ref={inputRef} className={s.input} type="text" placeholder="New txt"/>
            <button onClick={createNewNote} className={s.button}>Create</button>
        </div>
        </>
    )

}

export default Notes