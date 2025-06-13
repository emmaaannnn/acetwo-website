import React, { useState } from "react";
import "../styles/home.css"; // or create a dedicated modal CSS

const ProductModal = ({ product, onClose }) => {
  const [mainImage, setMainImage] = useState(product.imageUrl);

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Product Name */}
        <h1 className="modal-title">{product.name}</h1>

        <div className="modal-body">
            {/* Left: Main Image & Thumbnails */}
            <div className="modal-image-container">
                <img src={mainImage} alt={product.name} className="modal-main-image" />
                <div className="thumbnail-row">
                <img
                    src={product.imageUrl}
                    alt="Front view"
                    onClick={() => setMainImage(product.imageUrl)}
                    className={`thumbnail ${mainImage === product.imageUrl ? "active" : ""}`}
                />
                <img
                    src={product.imageUrl2}
                    alt="Back view"
                    onClick={() => setMainImage(product.imageUrl2)}
                    className={`thumbnail ${mainImage === product.imageUrl2 ? "active" : ""}`}
                />
                </div>
            </div>

            {/* Right: Info */}
            <div className="modal-info">
                {/* Description */}
                <div className="modal-description"> 
                    <h4>Description:</h4>
                    <p>{product.description}</p>
                </div>

                {/* Price */}
                <div className="modal-price">
                    {product.sale && product.salePrice ? (
                        <>
                        <span className="original-price">${product.price}</span>
                        <span className="sale-price">${product.salePrice} <span className="sale-label">SALE</span></span>
                        </>
                    ) : (
                        <span>${product.price}</span>
                    )}
                </div>

                {/* Availability */}
                {product.outOfStock ? (
                <div className="modal-sizes">
                    <p>Available Sizes:</p>
                    <p className="modal-sold-out">SOLD OUT</p>
                </div>
                ) : (
                <div className="modal-sizes">
                    <p>Available Sizes:</p>
                    <div className="size-list">
                        {product.availableSizes.map((size) => (
                            <span key={size} className="size-pill">{size}</span>
                        ))}
                    </div>
                </div>
                )}

                {/* Purchase Button & Close Button */}
                <div className="modal-buttons">
                    <a href="https://www.instagram.com/4ce.two"
                        target="_blank" rel="noopener noreferrer" className="purchase-button">
                        Purchase via Instagram
                    </a>
                </div>
            </div>
        </div>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default ProductModal;