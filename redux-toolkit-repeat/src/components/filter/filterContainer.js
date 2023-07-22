import {changeFilterAC} from "../../redux/todoReducer"
import {connect} from "react-redux"
import Filter from "./filter"
const mapStateToProps = (state)=>({
    filter: state.tasks.filter
})

const mapDispatchToProps = {
    changeFilter: changeFilterAC
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)