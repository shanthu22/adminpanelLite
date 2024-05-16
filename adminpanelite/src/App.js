import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import MainLayout from "./components/templates/MainLayout/MainLayout";
import React, { createContext, useState, useContext } from "react";
import { AuthProvider } from "./utils/AuthContext/AuthContext";
import ProtectedRoute from "./components/atoms/ProtectedRoute/ProtectedRoute";
const AuthContext = createContext();

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            {/* <Route exact path="/dashboard" element={<MainLayout />} /> */}

            <Route exact path="/dashboard" element={<ProtectedRoute />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
