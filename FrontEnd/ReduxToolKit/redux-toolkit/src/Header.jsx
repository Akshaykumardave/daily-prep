import AddToCart from "./AddToCart";
import { useSelector } from "react-redux";

const Header = () => {
  const selector = useSelector((state) => state.cart.value);

  return (
    <header>
      <div className="logo">MyShop</div>
      <nav>
        <ul>
            <li><a href="#" >Home {selector}</a></li>
            <li><a href="#">Products</a></li>
        </ul>
      </nav>
      <AddToCart/>
    </header>
  );
};

export default Header;
