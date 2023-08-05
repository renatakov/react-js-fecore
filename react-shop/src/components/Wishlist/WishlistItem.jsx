import s from "./wishlist.module.scss"

const WishlistItem = (props) => {
    return(
        <li className={s.container_item}>
        <p className={s.container_item_text}>Name: {props.name}</p>
        <p className={s.container_item_price}>Price: {props.price}$</p>
    </li>
    )
}

export default WishlistItem