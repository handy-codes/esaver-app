import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Demo from "./pages/Demo"
import Career from "./pages/Career"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Nav from "./components/Nav"

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/demo" element={<Demo/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App