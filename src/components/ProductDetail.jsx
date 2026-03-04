import React from "react";

const ProductDetail = ({ product, onBack, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="container py-5">
      <button
        className="btn btn-link link-dark p-0 mb-4 d-flex align-items-center"
        onClick={onBack}
      >
        <span className="me-2">&larr;</span> Back to Products
      </button>

      <div className="row g-5">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column mb-3">
            <div>
              <h1 className="fw-bold mb-1">{product.name}</h1>
              <div className="text-warning h4">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
              <p className="text-muted text-capitalize mb-0">
                Category: {product.category}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">Description</h5>
            <p className="text-secondary" style={{ lineHeight: "1.8" }}>
              {product.description}
            </p>
          </div>

          <div className="card bg-light border-0 p-2 mb-4">
            <div className="d-flex align-items-center mb-3">
              <span className="text-muted me-2">Color:</span>
              <span
                className="rounded-circle d-inline-block shadow-sm"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: product.color,
                  border:
                    product.color === "white" ? "1px solid #dee2e6" : "none",
                }}
              ></span>
              <span className="ms-2 text-capitalize">{product.color}</span>
            </div>

            <div className="d-flex align-items-center mb-4">
              {product.discountPrice ? (
                <>
                  <h2 className="text-danger fw-bold mb-0 me-3">
                    Price: ${product.discountPrice}
                  </h2>
                  <span className="text-decoration-line-through text-muted h4 mb-0">
                    ${product.price}
                  </span>
                </>
              ) : (
                <h2 className="fw-bold mb-0">Price: ${product.price}</h2>
              )}
            </div>

            <button
              className="btn btn-dark btn-lg w-100 shadow-sm"
              onClick={() => onAddToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
