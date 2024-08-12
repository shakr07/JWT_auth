import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdbreact";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", {
        username,
        email,
        password,
      });
      navigate('/login');
      // Handle successful registration (e.g., redirect to signin)
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="image-container">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            alt="Signup Illustration"
            className="image"
          />
        </div>
        <h2 className="title">Sign up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <MDBBtn className="btn-primary">Register</MDBBtn>
        </form>
      </div>
    </div>
  );
}

export default Signup;
