import { confirmWish, cancelWish } from "../../redux/productsReducer"
import { connect } from "react-redux"
import Modal from "./Modal"
const mapStateToProps = ()=> {}

const mapDispatchToProps = {
confirmWish,
cancelWish
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)