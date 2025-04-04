import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import { loginUser } from "../services/api";
import uiBackground from '../assets/images/bus-bg.png';
import googleLogo from "../assets/images/google.webp";
const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      const userData = await loginUser(id, password);
      
      // Redirect based on role
      if (userData.role === 'student') {
        navigate('/student-dashboard');
      } else if (userData.role === 'driver') {
        navigate( '/driver-home' );
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-screen">
      <div className="background-layer">
        <img src={uiBackground} alt="UI Background" className="fixed-background" />
      </div>

      <div className="content-layer">
        <h1 className="main-heading">Welcome to NITC Bus System</h1>
        <p className="sub-heading">Track your campus buses in real-time</p>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="button"
            className="forgot-password"
            onClick={() => console.log("Forgot Password clicked!")}
          >
            Forgot Password?
          </button>

          <button 
            type="submit" 
            className="login-btn" 
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <button className="google-btn">
          <img src={googleLogo} alt="Google Logo" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
