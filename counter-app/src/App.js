import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Shopping from "./components/pages/Shopping";

function App() {
  // const [currentForm, setCurrentForm] = useState("SignUp");

  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // };
  const itemList = [
    {
      id:1,
      name: "Jeans",
      price: 2000,
    },
    {
      id:2,
      name: "Jacket",
      price: 5000
    },
    {
      id:3,
      name: "macbook",
      price: 1599
    },
    {
      id:4,
      name: "shoes",
      price: 1000
    }
  ]

  


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopping itemList = {itemList}/>} />
          <Route path="/sign-up" element={<SignUp />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
