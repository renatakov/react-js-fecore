import MainContainer from "./components/Main//MainContainer";
import Header from "./components/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import WishlistContainer from "./components/Wishlist/WishlistContainer";
const App = () => {
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainContainer/>}/>
      <Route path="/wishlist" element={<WishlistContainer/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
