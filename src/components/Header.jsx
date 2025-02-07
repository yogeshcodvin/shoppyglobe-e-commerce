import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../utils/searchSlice";
import "../utils/Header.css"; 

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const dispatch = useDispatch();

  console.log(cartItems); // Check the items in the cart
  console.log(cartCount); // Check the cart count

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          ShoppyGlobe
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/cart" className="nav-item cart">
            Cart
            {cartItems.length > 0 && (
              <span className="cart-count">{cartCount}</span> 
            )}
          </Link>
        </nav>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
    </header>
  );
}

export default Header;
