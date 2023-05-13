import User from "./User/User"
import {useEffect, useRef} from "react";
const Users = (props) =>{
    console.log(props)
    let UsersCollection = props.users.map((user) =>{
        return <User
        id={user.id}
        deleteUser={props.deleteUser}
        key={user.id}
        name={user.name}
        age={user.age}
        />
    })
    const form = {
        inputName: useRef(null),
        inputAge: useRef(null),
        btnCreate: useRef(null),
    }
    useEffect(() =>{
        form.inputName.current.addEventListener('input', ()=>{
            props.updateNewUser("name",form.inputName.current.value)
        })
        form.inputAge.current.addEventListener('input', ()=>{
            props.updateNewUser("age",form.inputAge.current.value)
        })
        form.btnCreate.current.addEventListener('click', ()=>{
            props.createUser()
            
        })
    })
    return(
        <>
        <h1>Users</h1>
        {UsersCollection}
        <div>
            <input ref={form.inputName} type="text" placeholder="wtite name"/>
            <input ref={form.inputAge} type="number" placeholder="write age"/>
            <button ref={form.btnCreate}>Create</button>
        </div>
        </>
    )
}

export default Users