import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <h1>FAQ</h1>
      {/* Your product grid goes here */}
      <div>
        <Link to="/store">Store</Link> | <Link to="/faq">FAQ</Link> | <Link to="/policies">Policies</Link>
      </div>
    </div>
  );
};

export default FAQ;
