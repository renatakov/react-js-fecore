import "./Button.css";
const Button = (props) => {
    const clickToBtn = () => {
        alert(`Click to ${props.text} button`)
    };
    return (
        <button className="btn" onClick={clickToBtn}>{props.text}</button>
    )
}
export default Button