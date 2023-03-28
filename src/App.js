/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Models from "./pages/Models";
import Form from "./pages/Forms/FormTemplate";
import "./App.css";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile/:profileId" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/models" element={<Models />} />
        <Route path="/form/:disease" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
