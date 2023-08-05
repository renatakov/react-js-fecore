import ListItem from "./ListItem"
import s from "./list.module.scss"

const List = (props) => {
    //list props = {list = array}
    const ProductsCollection = props.list.map((el)=>{
        return(
            <ListItem
            setWishlistCandidate={props.setWishlistCandidate}
            key={el.id}
            id={el.id}
            name={el.name}
            price={el.price}
            />
        )
    })
    return(
        <ul className={s.container}>
            {ProductsCollection}
        </ul>
    )
}

export default List