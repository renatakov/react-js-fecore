// import Button from './Components/Button/Button'
// import Notes from "./Components/Notes/Notes"
// import Profile from './Components/Profile/Profile'
import Notes from "./Components/Notes/Notes"
import Header  from './Components/Assets/Header/Header'
const App = (props) =>{
    return (
        <>
        <Header/>
        <Notes title="Notes"/>
        {/*<Profile
        store = {props.store}
        rerender = {props.rerender}
        /> */}
        {/* <Notes 
        notesStore={props.notesStore}
        rerender={props.rerender}
        type="notes"/> */}
        </>
        // <main>
        //     <Button theme="orange" text="Get started"/>
        //     <Button theme="green" text="Create"/>
        //     <Button theme="red" text="Delete"/>

        // </main>

    )
}

export default App