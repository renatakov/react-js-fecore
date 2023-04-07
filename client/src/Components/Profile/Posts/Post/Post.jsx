const Post = (props) =>{
    return(
        <div>
            <h3>{props.time}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Post