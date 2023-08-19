const Welcome = (props) => {
    if(props.username){
        return(
            <p>Welcome, {props.username}</p>
        )
    }
    return(
        <p>Welcome to home page</p>
    )
}

export default Welcome