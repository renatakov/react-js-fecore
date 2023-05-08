import Users from "./Components/Users/Users";

const App = (props) =>{
  return(
    <div>
    <Users
    state = {props.state.usersPage}
    getState = {props.getState}
    dispatch = {props.dispatch}
    reRender = {props.reRender}
    />
    </div>
  )
}

export default App;
