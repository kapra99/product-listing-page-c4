import React from "react";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top pt-3 pb-3">
      <div className="container">
        <span className="navbar-brand fw-bold">MyFancyStore</span>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop by category:{" "}
            <span className="text-capitalize">{selectedCategory}</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className={`dropdown-item p-3 nav-link btn btn-link ${
                  selectedCategory === "bags"
                    ? "fw-bold text-dark"
                    : "text-secondary"
                }`}
                onClick={() => setSelectedCategory("bags")}
              >
                Bags
              </button>
            </li>
            <li>
              <button
                className={`dropdown-item p-3 nav-link btn btn-link ${
                  selectedCategory === "shoes"
                    ? "fw-bold text-dark"
                    : "text-secondary"
                }`}
                onClick={() => setSelectedCategory("shoes")}
              >
                Shoes
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
