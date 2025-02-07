import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; 
import "../utils/ProductDetail.css"; 

function ProductDetail() {
  const { id } = useParams();
  const [product, setItem] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <p className="loading-text">Loading product details...</p>;
  if (error) return <p className="error-text">{error}</p>;

  function handleAddItem() {
    dispatch(addItem(product));
  }

  return (
    <div className="product-detail-container">
      <h1 className="product-title">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddItem}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
