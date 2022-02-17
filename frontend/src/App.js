import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
