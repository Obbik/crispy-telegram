import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("userToken"));
  },[token]);

  return (
    <Router>
      {token ? (
        <Routes>
          <Route exact path="/" element={<MainPage setToken={setToken} />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<LoginPage setToken={setToken}/>} />
          <Route path="/register" element={<RegisterPage setToken={setToken}/>} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
