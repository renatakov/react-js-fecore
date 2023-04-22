import { Link } from 'react-router-dom'
import s from "./NavBar.module.css"
const NavBar = () => {
    return(
        <nav className={s.nav}>
            <Link className={s.link} to="/">Main Page</Link>
            <Link className={s.link} to="/notes">Notes</Link>
        </nav>
    )
}
export default NavBar;