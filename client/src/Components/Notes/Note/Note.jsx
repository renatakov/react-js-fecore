import style from "./Note.module.css"
import Button from "../../Button/Button"
const Note = (props) => { 
    console.log(style)
    return (
        <div className={style.note}>
            <p className={style.noteText}>{props.text}</p>
            <Button text="Delete" />
        </div>
    )
}

export default Note