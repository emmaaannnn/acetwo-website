import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <div>
      <h1>Welcome to ACETWO</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter store password"
      />
      <button onClick={handleUnlock}>Enter</button>

      <div>
        <Link to="/faq">FAQ</Link> | <Link to="/policies">Policies</Link>
      </div>
    </div>
  );
};

export default LockScreen;
