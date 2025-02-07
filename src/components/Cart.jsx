import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";  
import CartItem from "./CartItem";
import "../utils/Cart.css";  

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);  
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <button onClick={handleClearCart} className="clear-cart-btn">
        Clear Cart
      </button>
      <div className="cart-items">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
