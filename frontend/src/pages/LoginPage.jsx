import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import uiBackground from '../assets/images/bus-bg.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password
      });
  
      // Handle successful login
      localStorage.setItem('user', JSON.stringify({
        username: response.data.username,
        role: response.data.role
      }));
  
      // Redirect based on role
      if (response.data.role === 'student') {
        navigate('/student-dashboard');
      } else if (response.data.role === 'driver') {
        navigate('/driver-dashboard');
      }
  
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
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

        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>

          <a href="#forgot" className="forgot-link">Forgot password?</a>

          <a href="/student-dashboard">
    <button type="button">Go to Dashboard</button>
</a>

          <div className="social-section">
            <div className="divider-line">
              <span>or continue with</span>
            </div>
            
            <div className="social-btns">
              <button className="social-btn google">
                <span className="social-icon">G</span>
                Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
