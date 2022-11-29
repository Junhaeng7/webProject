import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
// import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  // const [currentForm, setCurrentForm] = useState("SignUp");

  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // };
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
