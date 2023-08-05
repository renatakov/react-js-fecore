import s from "./list.module.scss"

const ListItem = (props) => {
    const handleAdd = () => {
        props.setWishlistCandidate(props.id)
    }
    return(
        <li className={s.container_item}>
            <p className={s.container_item_text}>Name: {props.name}</p>
            <p className={s.container_item_price}>Price: {props.price}$</p>
            <button onClick={handleAdd} className={s.container_item_btn}>Add to wishlist</button>
        </li>
    )
}

export default ListItem