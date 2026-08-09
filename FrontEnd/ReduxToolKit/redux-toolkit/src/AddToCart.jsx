import { useSelector } from "react-redux";

const AddToCart = () => {
  // useSelector lets React components read data from the Redux store
  // It gets the current cart value from state.cart.value
  const selector = useSelector((state) => state.cart.value);
  console.log(selector);
  return (
    <div className="cart">
      <img src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" />
      <span className="cart-count">{selector}</span>
    </div>
  );
};

export default AddToCart;
