import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/lockScreen.css"; 

const LockScreen = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (password === "yourPassword") {
      sessionStorage.setItem("authenticated", "true");
      navigate("/store");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="lockscreen-container">
      <div className="lockscreen-content">
        <h1 className="lockscreen-title">Welcome to ACETWO</h1>
        <img src="/logo2.gif" alt="ACETWO Logo" className="lockscreen-logo" />
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
      <div className="lockscreen-links">
        <Link to="/faq" className="lockscreen-link">FAQ</Link> |
        <Link to="/policies" className="lockscreen-link">Policies</Link>
      </div>
    </div>
  );
};

export default LockScreen;