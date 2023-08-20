const Welcome = (props) => {
    // if(props.username){
    //     return(
    //         <p>Welcome, {props.username}</p>
    //     )
    // }
    return(
        <button onClick={props.handleClick}>Click</button>
    )
}

export default Welcome