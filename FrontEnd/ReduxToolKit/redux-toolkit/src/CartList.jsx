import { useSelector } from "react-redux";

function CartList() {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log('cart item list', cartSelector);
    return (
        <>
            <h1>Cart List Page</h1>
        </>
    );
}

export default CartList;