import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Models from "./pages/Models";
import Diabetes from "./pages/Forms/Diabetes";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/models" element={<Models />} />
        <Route  path="/form/">
          <Route exact path="Diabetes" element={<Diabetes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
