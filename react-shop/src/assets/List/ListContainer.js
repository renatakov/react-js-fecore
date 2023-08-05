import { setWishlistCandidate} from "../../redux/productsReducer"
import { connect } from "react-redux"
import List from "./List"
const mapStateToProps = (state) => ({
    list: state.products.list,
})

const mapDispatchToProps = {
setWishlistCandidate
}

export default connect(mapStateToProps, mapDispatchToProps)(List)