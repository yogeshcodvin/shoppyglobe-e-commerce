import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import '../utils/ProductItem.css';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  // Handle the "Add to Cart" action
  function handleAddItem(e) {
    e.stopPropagation(); // Prevents Link from being triggered
    dispatch(addItem(product));
  }


  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>

      {/* Add to Cart button */}
      <div className="product-actions">
        <button
          className="add-to-cart-btn"
          onClick={handleAddItem} // Prevent navigation here
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="view-details"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
