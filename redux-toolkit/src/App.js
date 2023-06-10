import {addNote} from "./redux/reducers/notesReducer"
import Notes from "./Components/notesPage/Notes"
const App = () =>{
  // console.log(addNote("Note 1"))
  return(
    <>
    <Notes/>
    </>
  )
}
export default App;
