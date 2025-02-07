import { useState, useEffect } from "react";
import { useProduct } from "../utils/useProduct";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import "../utils/ProductList.css";

function ProductList() {
  const { products, isLoading, error } = useProduct();
  const text = useSelector((state) => state.search.term);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (text) {
      setSelectedCategory("All");
    }
  }, [text]);

  // Extract unique categories
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filterng products based on search term and selected category
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(text.toLowerCase()) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  );

  // Assuming top 4 products are trending
  const popularProducts = products.slice(0, 4);

  // Carousel navigation functions
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popularProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? popularProducts.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="product-list">
      {/* Trending Products Section */}
      {text === "" && (
        <section className="trending-products">
          <h2>Trending Products</h2>
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrev}>
              &#60;
            </button>
            <div className="product-carousel">
              {popularProducts.slice(currentIndex, currentIndex + 1).map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
            <button className="carousel-button next" onClick={handleNext}>
              &#62;
            </button>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* All Products Section */}
      <section className="all-products">
        <h2>{text === "" ? "All Products" : "Search Results"}</h2>
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
