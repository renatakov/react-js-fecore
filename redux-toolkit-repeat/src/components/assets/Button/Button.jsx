import s from "./button.module.scss"

const Button = (props) => {
    return(
        <button className={`${s.btn} ${props.isActive && s.btn_active}`}>{props.text}</button>
    )
}

export default Button