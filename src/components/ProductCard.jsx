import React from "react";

const ProductCard = ({ product, onAddToCart, onSelectProduct }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product.name);
  };

  return (
    <div
      className="card h-100 shadow-sm border-0 product-card-hover"
      onClick={onSelectProduct}
      style={{ cursor: "pointer" }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{product.name}</h5>
        <p className="card-text text-muted small">
          {product.short_description}
        </p>

        <div className="mt-auto">
          <div className="text-warning mb-2">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </div>

          <div className="mb-3">
            {product.discountPrice ? (
              <>
                <span className="text-danger fw-bold me-2">
                  ${product.discountPrice}
                </span>
                <span className="text-decoration-line-through text-muted small">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="fw-bold">${product.price}</span>
            )}
          </div>

          <button className="btn btn-dark w-100" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
