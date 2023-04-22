import s from "./Note.module.css"

const Note = (props) =>{
    return(
        <div className={s.note}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Note;