import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Footer from "./components/Footer.jsx";
import categoriesData from "./data/categories.json";
import productsData from "./data/products.json";
import "./App.css";

const products = productsData.products;

function App() {
  const [selectedCategory, setSelectedCategory] = useState("bags");
  const [sortBy, setSortBy] = useState("default");
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState("");
  const [currentView, setCurrentView] = useState("listing");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [filterColor, setFilterColor] = useState("all");
  const [maxPrice, setMaxPrice] = useState(300);

  const itemsPerPage = 20;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  let filteredProducts = products.filter((product) => {
    const matchesCategory = product.category === selectedCategory;
    const matchesColor = filterColor === "all" || product.color === filterColor;
    const matchesPrice = (product.discountPrice || product.price) <= maxPrice;

    return matchesCategory && matchesColor && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;

    if (sortBy === "priceLow") return priceA - priceB;
    if (sortBy === "priceHigh") return priceB - priceA;
    if (sortBy === "az") return a.name.localeCompare(b.name);
    if (sortBy === "za") return b.name.localeCompare(a.name);
    return 0;
  });

  const displayedProducts = sortedProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(itemsPerPage);
    setFilterColor("all");
    setMaxPrice(300);
    setCurrentView("listing");
  };

  const handleAddToCart = (productName) => {
    setAddedProduct(productName);
    setShowToast(true);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView("detail");
    window.scrollTo(0, 0);
  };

  const handleBackToListing = () => {
    setCurrentView("listing");
    setSelectedProduct(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />

      <main className="container flex-grow-1 mt-5">
        {currentView === "listing" ? (
          <div className="row">
            <Sidebar
              filterColor={filterColor}
              setFilterColor={setFilterColor}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
            <div className="col-lg-9">
              <ProductGrid
                products={displayedProducts}
                totalCount={filteredProducts.length}
                onLoadMore={handleLoadMore}
                onAddToCart={handleAddToCart}
                onSelectProduct={handleSelectProduct}
                hasMore={visibleCount < filteredProducts.length}
                categoryTitle={categoriesData[selectedCategory].title}
                categoryDescription={
                  categoriesData[selectedCategory].description
                }
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </div>
        ) : (
          <ProductDetail
            product={selectedProduct}
            onBack={handleBackToListing}
            onAddToCart={handleAddToCart}
          />
        )}
      </main>

      <Footer />

      <ToastContainer
        className="p-3"
        style={{ zIndex: 9999, position: "fixed", top: "90px", right: 0 }}
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
          className="bg-success text-white"
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>
            <strong>{addedProduct}</strong> has been added to your cart!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default App;
