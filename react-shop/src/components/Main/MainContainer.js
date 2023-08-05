import {connect} from "react-redux"
import Main from "./Main"
const mapStateToProps  = (state) => ({
    list: state.products.list,
    isOpenModal: state.products.isModalOpen
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)