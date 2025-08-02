import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.user.id;
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token"); // Clear invalid token
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Mini-LinkedIn
      </Link>
      <div className="nav-links">
        {token ? (
          <>
            <Link to={`/profile/${userId}`}>My Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
