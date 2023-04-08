import style from "./Note.module.css"
import Button from "../../Button/Button"
const Note = (props) => { 
    // console.log(props.title)
    return (
        <div className={style.note}>
            <h1 className={style.noteTitle}>{props.title}</h1>
            <p className={style.noteText}>{props.text}</p>
            <Button
            text="Delete" />
        </div>
    )
}

export default Note