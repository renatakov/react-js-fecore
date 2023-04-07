import s from "./Profile.module.css"
import Posts from "./Posts/Posts"
const Profile = (props) =>{
    console.log(props)
    // props={
    //     name:""
    //     avatar: ""
    //     description:""
    //     post:[
    //         time:""
    //         text:""
    //     ]
    // }
    return(
        <div className={s.profileBlock}>
            <div className={s.profile}>
        <img className={s.avatar} src={props.store.avatar} alt=""/>
        <div className={s.profileInfo}>
            <p className={s.text}>{props.store.name}</p>
            <p className={s.text}>{props.store.description}</p>

        </div>
            </div>
            <Posts posts={props.store.post}/>
        </div>
    )
}

export default Profile