import User from "./User";
import { addUserAC } from "../../redux/reducers/usersReducer";
import { useEffect, useRef } from "react"
const Users = (props) => {
    let form = {
        input: useRef(null),
        btnCreate: useRef(null)
    }
    let UsersCollection = props.state.map((user, index) => { 
        return (
            <User key={index} name={user.name}/>
        )
    }) 
    useEffect(() =>{ 
        form.btnCreate.current.addEventListener('click', () => {
            let newUser = { 
                id: props.state[props.state.length-1].id + 1,
                name: form.input.current.value
            }
            props.dispatch(addUserAC(newUser))
            props.reRender(props.getState(),
            props.getState,
            props.dispatch)
            form.input.current.value = ""
        })
    }, [])
    console.log(props)
    return (
        <div>
        <h1>Users</h1>
        {UsersCollection}
        <hr/>
        <input ref={form.input} placeholder="Write name"/>
        <button ref={form.btnCreate}>Create</button>
        </div>
    )
}

export default Users


/*


*/