import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Shopping from "./components/pages/Shopping";
import Cart from "./components/pages/Cart";

function App() {
  // const [currentForm, setCurrentForm] = useState("SignUp");

  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // };
  const itemList = [
    {
      id:1,
      name: "Jeans",
      price: 120,
      type: "bottom"
    },
    {
      id:2,
      name: "Jacket",
      price: 99,
      type: "top"
    },
    {
      id:3,
      name: "macbook",
      price: 1599,
      type: "other"
    },
    {
      id:4,
      name: "shoes",
      price: 100,
      type: "shoes"
    },
    {
      id:5,
      name: "T-shirt",
      price: 10,
      type: "top"
    },{
      id:6,
      name: "shorts",
      price: 50,
      type: "bottom"
    },
    {
      id:7,
      name: "crocs",
      price: 45,
      type: "shoes"
    },
  ]

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopping itemList = {itemList}/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
