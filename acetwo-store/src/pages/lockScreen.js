import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/lockScreen.css"; 
import passwordData from "../data/password.json"

const LockScreen = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const storedPassword = passwordData.password;
  const [error, setError] = useState("");

  const handleUnlock = () => {
    if (password === storedPassword) {
      sessionStorage.setItem("authenticated", "true");
      navigate("/home");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="lockscreen-container">
      <div className="lockscreen-content">
        <h1 className="lockscreen-title">Welcome to ACETWO</h1>
        <img src="/logo2.gif" alt="ACETWO Logo" className="lockscreen-logo" />

        {error && (
          <div className="lockscreen-error">
            {error}
          </div>
        )}

        <div className= "password-input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter store password"
            className="lockscreen-input"
          />
          <button onClick={handleUnlock} className="lockscreen-button">
            Enter
          </button>
        </div>
      </div>

      <div className="lockscreen-links">
        <Link to="/support" className="lockscreen-link">Customer Support</Link> |
        <Link to="/policies" className="lockscreen-link">Policies</Link>
      </div>
    </div>
  );
};

export default LockScreen;