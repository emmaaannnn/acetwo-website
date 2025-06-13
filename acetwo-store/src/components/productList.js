import React, { useState } from "react";
import Product from "./product";
import productsData from "../data/products.json";

const ProductList = ({ collectionName }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Find the collection that matches the given collectionName
  const collection = productsData.collections.find(
    (col) => col.collectionName === collectionName
  );

  return (
    <div className="product-list">
      {collection ? (
        <>
          <h2 className= "collection-title">{collection.collectionName}</h2>
          <div className="grid-container">
            {collection.products.map((product) => (
              <Product key={product.id} product={product} onSelect={setSelectedProduct} />
            ))}
          </div>
        </>
      ) : (
        <p>Collection not found.</p>
      )}

      {/* Modal for Selected Product */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <p><strong>Price:</strong> ${selectedProduct.sale ? selectedProduct.salePrice : selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;