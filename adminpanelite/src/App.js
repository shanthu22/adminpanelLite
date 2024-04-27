import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import MainLayout from "./components/templates/MainLayout/MainLayout";
import React from "react";
//new app
// import app_routes from "./components/Routes"
//import app_routes from "./components/Routes";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<MainLayout />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={"###"} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
