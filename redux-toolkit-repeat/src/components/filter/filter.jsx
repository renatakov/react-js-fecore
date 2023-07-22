import Button from "../assets/Button/Button"
import s from "./filter.module.scss"
const Filter = (props) =>{
    // console.log(props)
    return(
        <div className={s.filter}>
            <Button isActive={true} text="All"/>
            <Button text="Completed"/>
            <Button text="Active"/>
        </div>
    )
}

export default Filter