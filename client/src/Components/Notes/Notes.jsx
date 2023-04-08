import Note from "./Note/Note"
// import React from "react";
// import s from "./Notes.module.css"
//  const Notes = (props) => {
//     let notesStore = props.notesStore;
//     let NoteElement = notesStore.map((note, index) =>{
//         return <Note key={`note${index}`} theme={note.theme} text={note.text}/>
//     })
//     let inputRef = React.createRef()
//     const createNewNote = ()=>{
//         alert(inputRef.current.value)
//         notesStore.push({
//             text: inputRef.current.value,
//             theme: null
//         })
//         props.rerender(notesStore)
//         inputRef.current.value = null
//     }
//     console.log(NoteElement)
//     return(
//         <>
//         {NoteElement}
//         <div className={s.form}>
//             <input ref={inputRef} className={s.input} type="text" placeholder="New txt"/>
//             <button onClick={createNewNote} className={s.button}>Create</button>
//         </div>
//         </>
//     )

// }

// export default Notes

import React from "react";

class Notes extends React.Component {
    constructor(props) {
        super();
    }
    state = {
        notesStore: [
            {
                title:"Note 1",
                text: "This is a note",
            }
        ],
        newNote: {
            title: null,
            text: null
        },
    }
    inputRef = React.createRef();
    inputRef2 = React.createRef();

    btnRef = React.createRef();
    componentDidMount(){
    this.btnRef.current.addEventListener("click", () => {
        if(this.state.newNote.length === 0){
            alert("Please enter a note");
        } else{
            this.setState({
                notesStore: [...this.state.notesStore, {
                    title: this.state.newNote.title,
                    text: this.state.newNote.text,
                }],
            })
            this.inputRef.current.value = "";
            this.inputRef2.current.value = "";

        }
    })
    this.inputRef.current.addEventListener("input", (e) => {
        this.setState({
            ...this.state,
            newNote: {
                ...this.state.newNote,
                text: this.inputRef.current.value
            },
        })
    })
    this.inputRef2.current.addEventListener("input", (e) => {
        this.setState({
            ...this.state,
            newNote: {
                ...this.state.newNote,
                title: this.inputRef2.current.value,
            },
        })
    })
    }
render() {
let NotesElements = this.state.notesStore.map((note, i) =>{
    return <Note key={`note${i}`} title={note.title}  text={note.text}/>
})
    return(
    <div>
        {NotesElements}
        <input value={this.state.newNote.title} ref={this.inputRef2} type="text" placeholder="Write new title"/>
        <input value={this.state.newNote.text} ref={this.inputRef} type="text" placeholder="Write new text"/>
        <button ref={this.btnRef}>Create</button>
    </div>
    )
}
}

export default Notes