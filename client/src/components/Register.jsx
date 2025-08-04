import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { name, email, password, bio } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the environment variable for the API URL
      const API_URL = process.env.REACT_APP_API_URL;
      const res = await axios.post(`${API_URL}/api/auth/register`, formData);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.msg ||
          "An unexpected error occurred. Please try again."
      );
      console.error(err.response?.data);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {/* Added new class 'register-form-content' to the form tag */}
      <form onSubmit={onSubmit} className="register-form-content">
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea name="bio" value={bio} onChange={onChange}></textarea>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
