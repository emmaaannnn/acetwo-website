import { Link } from "react-router-dom";
import "../styles/page.css"; // Standard CSS for text pages

const Policies = () => {
  return (
    <div className="standard-container">
      <header className="header">
        <div className="header-content">
          <div className="home-links">
            <Link to="/home">Home</Link>
            <Link to="/support">Customer Support</Link>
            <Link to="/policies">Policies</Link>
          </div>
          <div className="logo-container">
            <img src="/logo2.gif" alt="ACETWO Logo" className="home-logo" />
          </div>
        </div>
      </header>

      
    </div>
  );
};

export default Policies;
