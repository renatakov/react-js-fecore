import {connect} from "react-redux"
import ReviewForm from "./ReviewForm"
import { cancelReview, submitReview } from "../../redux/productsReducer"
const mapStateToProps  = (state) => ({
    isReviewFormOpen: state.products.isReviewFormOpen

})

const mapDispatchToProps = {
cancelReview:cancelReview,
submitReview: submitReview
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)