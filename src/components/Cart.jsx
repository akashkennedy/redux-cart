import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove From Cart
              </button>
            </div>
          ))
        )}
      </div>
      <button
        onClick={() => dispatch(clearCart())}
        disabled={cart.length === 0}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
