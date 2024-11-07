import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Calculate the total price of all products in the cart
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.length === 0 ? (
          <h2>Your Cart is Empty</h2>
        ) : (
          cart.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={() => dispatch(incrementQuantity(product.id))}>
                +
              </button>
              <button onClick={() => dispatch(decrementQuantity(product.id))}>
                -
              </button>
              <button onClick={() => dispatch(removeFromCart(product.id))}>
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
      <p>Total Price: $ {totalPrice}</p>
    </div>
  );
};

export default Cart;
