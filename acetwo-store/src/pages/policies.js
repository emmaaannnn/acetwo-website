import { Link } from "react-router-dom";

const Policies = () => {
  return (
    <div>
      <h1>Policies</h1>
      {/* Your product grid goes here */}
      <div>
        <Link to="/store">Store</Link> | <Link to="/faq">FAQ</Link> | <Link to="/policies">Policies</Link>
      </div>
    </div>
  );
};

export default Policies;
