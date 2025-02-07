import { useDispatch } from "react-redux";
import { removeItem, addItem, decreaseItem } from "../utils/cartSlice";
import "../utils/Cart.css";  

function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }

  function handleIncreaseItem() {
    dispatch(addItem(product));
  }

  function handleDecreaseItem(id) {
    dispatch(decreaseItem(id));
  }

  return (
    <div className="cart-item">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => handleRemoveItem(product.id)}>
        Remove from Cart
      </button>
      <div>
        <button onClick={() => handleDecreaseItem(product.id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => handleIncreaseItem()}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
