import { Link } from "react-router-dom";
import ProductList from "../components/productList";
import "../styles/home.css"; // Import CSS file
import "../styles/modal.css"; // Import modal styles

const Home = () => {
  return (
    <div className="home-container">
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

      <ProductList collectionName="Outshine Collection" />
      <ProductList collectionName="Panda Collection" />
    </div>
  );
};

export default Home;
