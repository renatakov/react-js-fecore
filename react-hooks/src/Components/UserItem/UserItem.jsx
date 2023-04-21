const UserItem = (props) =>{
    return(

        <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <span>{props.age} y.o.</span>
    </div>
    )
}

export default UserItem;