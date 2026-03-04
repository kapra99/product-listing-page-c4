import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  totalCount,
  onLoadMore,
  hasMore,
  onAddToCart,
  onSelectProduct,
  categoryTitle,
  categoryDescription,
  sortBy,
  setSortBy,
}) => {
  return (
    <section>
      <div className="mb-5 border-bottom pb-4">
        <h1 className="display-4 fw-bold text-capitalize">{categoryTitle}</h1>
        <p className="lead text-muted">{categoryDescription}</p>
      </div>

      <div className="row mb-4 align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <p className="text-muted mb-0">
            <strong>{products.length}</strong> out of{" "}
            <strong>{totalCount}</strong> products displayed.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end align-items-center">
          <label className="me-2 fw-semibold text-nowrap mb-0">Sort By:</label>
          <select
            className="form-select w-auto shadow-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="az">Alphabetical (A-Z)</option>
            <option value="za">Alphabetical (Z-A)</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-xl-3">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onSelectProduct={() => onSelectProduct(product)}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="lead text-muted">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {hasMore && (
        <div className="text-center mt-5 mb-5">
          <button
            className="btn btn-outline-dark btn-lg px-5 shadow-sm"
            onClick={onLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
