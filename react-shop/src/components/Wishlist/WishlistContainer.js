import { connect } from "react-redux"
import Wishlist from "./Wishlist"
const mapStateToProps = (state) =>({
    list: state.products.list,
    wishlist: state.products.wishlist
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)