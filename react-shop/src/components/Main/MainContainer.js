import {connect} from "react-redux"
import Main from "./Main"
import { setReview } from "../../redux/productsReducer"
const mapStateToProps  = (state) => ({
    list: state.products.list,
    isOpenModal: state.products.isModalOpen,
    isReviewFormOpen: state.products.isReviewFormOpen

})

const mapDispatchToProps = {
setReview: setReview
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)