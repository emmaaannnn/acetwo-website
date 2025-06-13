import React, { useState } from "react";
import Product from "./product";
import productsData from "../data/products.json";
import ProductModal from "./productModal";

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

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ProductList;