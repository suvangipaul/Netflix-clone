import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Routes/dashboard";
import Home from "./Routes/home.pages";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
