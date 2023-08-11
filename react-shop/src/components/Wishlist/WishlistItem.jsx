import s from "./wishlist.module.scss"

const WishlistItem = (props) => {
    console.log(props)
    return(
        <li className={s.wishlistContainer_item}>
        <p className={s.wishlistContainer_item_text}>Name: {props.name}</p>
        <p className={s.wishlistContainer_item_price}>Price: {props.price}$</p>
    </li>
    )
}

export default WishlistItem