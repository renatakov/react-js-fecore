import Users from "./Users"
import {connect} from "react-redux"
import {createUserAC, updateNewUserAC, deleteUserAC} from "../../redux/reducers/usersReducer"

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    countUsers: state.usersPage.countUsers
})

const mapDispatchToProps =  ({
    createUser: createUserAC,
    updateNewUser: updateNewUserAC,
    deleteUser: deleteUserAC
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)