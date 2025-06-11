import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div>
      <h1>Store Home</h1>
      {/* Your product grid goes here */}
      <div>
        <Link to="/faq">FAQ</Link> | <Link to="/policies">Policies</Link>
      </div>
    </div>
  );
};

export default Store;
