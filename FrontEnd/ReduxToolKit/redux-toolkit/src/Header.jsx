import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const selector = useSelector((state) => state.cart.value);

  return (
    <header>
      <div className="logo">MyShop</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
