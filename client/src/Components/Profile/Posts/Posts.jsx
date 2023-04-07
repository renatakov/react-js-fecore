import Post from "./Post/Post"

const Posts = (props)=>{
    const ArrPosts = props.posts.map((post, index)=>{
        return <Post time={post.time} key={index} text={post.text}/>
    })
    return(
        <>
        {ArrPosts}
        </>
    )
}
export default Posts