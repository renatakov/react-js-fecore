// import {changeFilterAC} from "../../redux/todoReducer"
import {connect} from "react-redux"
import List from "./list"
const mapStateToProps = (state)=>({
    filter: state.tasks.filter,
    tasks: state.tasks.tasks
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(List)