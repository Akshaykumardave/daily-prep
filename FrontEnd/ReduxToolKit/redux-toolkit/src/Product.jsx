import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem, removeAllItems } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  // useDispatch gives this component a function to send actions to Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  return (
    <>
      <div className="grid">
        {productSelector &&
          productSelector.map((item) => (
            <div key={item.id} className="card">
              <img alt={item.name} src={item.thumbnail} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="brand">{item.brand}</div>
                <div className="price">{item.price}</div>
                <div className="rating">{item.rating}</div>
                {
                  cartSelector.find(cartItem => cartItem.id === item.id) ?
                  <button onClick={() => dispatch(removeItem(item))} className="btn" style={{color: "White", backgroundColor: 'Red'}}>Remove from cart</button>
                  : <button className="btn" onClick={() => dispatch(addItem(item))}>Add to cart</button>
                }
                
              </div>
            </div>
          ))} 
      </div>
    </>
  );
};

export default Product;
