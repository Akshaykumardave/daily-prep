import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeItem, removeAllItems} from './redux/slice'
import { useNavigate } from "react-router-dom";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log("cart item list", cartSelector);
  const [cartItems, setCartItems] = useState(cartSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    console.log(cartTempItems[0]);
    setCartItems(cartTempItems);
  };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(removeAllItems());
    navigate("/")

    alert('Order placed..!!')
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartItems.length} items</span>
        </div>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <div style={{ display: "flex" }}>
                    <input
                      style={{ margin: "15px" }}
                      type="number"
                      placeholder="Enter quantity"
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      value={item.quantity ? item.quantity : 1}
                    />
                    <div>
                      <span className="price">
                        $
                        {(item.quantity
                          ? item.price * item.quantity
                          : item.price
                        ).toFixed(2)}
                      </span>
                      <button className="btn" onClick={() => dispatch(removeItem(item))}> Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <div className="cart-footer">
          Total : $
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0,
            )
            .toFixed(2)}
        </div>
        <button className="btn" onClick={handlePlaceOrder}>Checkout</button>
      </div>
    </>
  );
}

export default CartList;
