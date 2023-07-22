import s from "./button.module.scss"

const Button = (props) => {
    return(
        <button 
        onClick={props.handleClick}
        className={`${s.btn} ${props.isActive && s.btn_active}`}>{props.text}</button>
    )
}

export default Button