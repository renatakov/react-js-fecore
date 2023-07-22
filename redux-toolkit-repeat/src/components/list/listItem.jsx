import s from "./list.module.scss"


const listItem = (props) => {
    return(
        <div className={s.list_item}>
            <p>{props.text}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

export default listItem