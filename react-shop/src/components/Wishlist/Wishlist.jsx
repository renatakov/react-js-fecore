import s from "./wishlist.module.scss"
import WishlistItem from "./WishlistItem"
const Wishlist = (props) => {
    console.log(props)
        const renderProducts = () => {
        return props.wishlist.map((item) => {
        const product = props.list.find((product) => product.id === item);
            if (product) {
            return <WishlistItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            />;
            }
            
            
        });
        };
    return(
        <>
        <h1>Wishlist</h1>
        <div className={s.wishlistContainer}>
        {renderProducts}
        </div>
        </>
    )
}

export default Wishlist