import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import "./App.css"; // We will create this file for styling

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
