import { useState } from "react";
import React from "react";
import UserItem from "./Components/UserItem/UserItem";
const App = () =>{
  const [countClick, setCount] = useState(0)
  const [theme, setTheme] = useState("dark")
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 25,
    city: "New York"
  })
  const [user, setUser] = useState([
    {
      name: "Renata",
      email: "renata@gmail.com",
      age: 15
    }
  ])
  let inputEmail = React.createRef()
  let inputName = React.createRef()
  let inputAge = React.createRef()
  const addCountClick = () => {
    setTheme(countClick % 2 === 0 ? "light" : "dark")
    setCount(countClick + 1)

  }
  const newUsers = () => {
    if(inputAge.current.value === "" 
    && inputName.current.value === "" 
    && inputEmail.current.value === ""){
      alert("Please fill all fields")
    } else{
      setUser([
      ...user,
      {
        name: inputName.current.value,
        email: inputEmail.current.value,
        age: inputAge.current.value
      }
      
    ])
      inputAge.current.value = ""
      inputEmail.current.value = ""
      inputName.current.value = ""
  }
}

const getAllUsers = user.map((item, i) =>{
      return <UserItem
      key={`id-${i}`}
      name={item.name}
      email={item.email} 
      age={item.age}/>
    })
  return(
    <>
    <p>Theme Now: {theme}</p>
    <p>You clicked to button: {countClick} count</p>
    <button onClick={addCountClick}>Click</button>

    <div>
      <input ref={inputName} placeholder="Name" type="text"/>
      <input ref={inputEmail} placeholder="Email" type="email"/>
      <input ref={inputAge} placeholder="Age" type="text"/>
    <button onClick={newUsers}>Click</button>
    </div>
    {getAllUsers}
    </>
  )
}

export default App;