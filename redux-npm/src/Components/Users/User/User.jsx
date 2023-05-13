import s from "./User.module.css"

const User = (props) =>{
    return(
        <div className={s.userBlock}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <button onClick={()=>{props.deleteUser(props.id)}}>Delete</button>
        </div>
    )
}

export default User