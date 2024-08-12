import React from "react";
import {BrowserRouter as Router,Routes,Navigate,Route} from "react-router-dom";
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Protected from "./pages/Protected";
import Logout from "./pages/Logout";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Protected route */}
        <Route path="/protected" element={token ? <Protected /> : <Login />} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </Router>
  );
}

export default App;
