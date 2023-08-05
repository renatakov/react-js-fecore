import s from "./header.module.scss"
import { NavLink } from "react-router-dom"
const Header = () => {
return(
    <header className={s.header}>
        <NavLink className={s.header_link} to="/">Main page</NavLink>
        <NavLink className={s.header_link} to="/wishlist">Wishlist</NavLink>
    </header>
)
}

export default Header