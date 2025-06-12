import React from "react";

const Product = ({ product, onSelect }) => {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <div className="image-wrapper">
        <img src={product.imageUrl} alt={product.name} className="product-image front" />
        <img src={product.imageUrl2} alt={`${product.name} back`} className="product-image back" />
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default Product;