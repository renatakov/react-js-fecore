import { useState, useEffect } from "react";
import React from "react";
import UserItem from "./Components/UserItem/UserItem";
import Notes from "./Components/Notes/Notes";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
// useEffect - componentDidMount, 
//componentDidUpdate, componentDidUnmount
const App = () =>{
//   const [countClick, setCount] = useState(0)
//   let btnRef = React.createRef()
//   useEffect(() => {
//     btnRef.current.addEventListener("click", () => {
//         setTheme(countClick % 2 === 0 ? "light" : "dark")
//         setCount(countClick + 1)
    
//     })
//   })
//   const [theme, setTheme] = useState("dark")
//   const [user, setUser] = useState([
//     {
//       name: "Renata",
//       email: "renata@gmail.com",
//       age: 15
//     }
//   ])
//   let inputEmail = React.createRef()
//   let inputName = React.createRef()
//   let inputAge = React.createRef()

//   const newUsers = () => {
//     if(inputAge.current.value === "" 
//     && inputName.current.value === "" 
//     && inputEmail.current.value === ""){
//       alert("Please fill all fields")
//     } else{
//       setUser([
//       ...user,
//       {
//         name: inputName.current.value,
//         email: inputEmail.current.value,
//         age: inputAge.current.value
//       }
      
//     ])
//       inputAge.current.value = ""
//       inputEmail.current.value = ""
//       inputName.current.value = ""
//   }
// }

// const getAllUsers = user.map((item, i) =>{
//       return <UserItem
//       key={`id-${i}`}
//       name={item.name}
//       email={item.email} 
//       age={item.age}/>
//     })
  return(
    <>
    {/* <p>Theme Now: {theme}</p>
    <p>You clicked to button: {countClick} count</p>
    <button ref={btnRef}>Click</button>

    <div>
      <input ref={inputName} placeholder="Name" type="text"/>
      <input ref={inputEmail} placeholder="Email" type="email"/>
      <input ref={inputAge} placeholder="Age" type="text"/>
    <button onClick={newUsers}>Click</button>
    </div>
    {getAllUsers} */}
    <div>

    <Header/>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/notes' element={<Notes/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;