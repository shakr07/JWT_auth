import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the signup page
    navigate("/");
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
