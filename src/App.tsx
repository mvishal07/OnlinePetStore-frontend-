import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./components/Home/Login/LoginPage"
import Signup from "./components/Home/Login/Signup"
import HomePage from "./components/Home/HomePage"
import Products from "./components/Home/Products"
import NavBar from "./components/Home/NavBar"
import Account from "./components/Home/Account"
import Sellpage from "./components/Home/Sellpage"
import Puppies from "./components/Home/Puppies"
import Access from "./components/Home/Access"
import Treatpage from "./components/Home/Treatpage"
import Supp from "./components/Home/Supp"

function App(){
  return<div>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/login"element={<LoginPage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/prd" element={<Products/>}></Route>
      <Route path="/nav" element={<NavBar/>}></Route>
      <Route path="/acc" element={<Account/>}></Route>
      <Route path="/sell" element={<Sellpage/>}></Route>
      <Route path="/puppy" element={<Puppies/>}></Route>
      <Route path="/acce" element={<Access/>}></Route>
      <Route path="/treat" element={<Treatpage/>}></Route>
      <Route path="/supp" element={<Supp/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}
export default App