import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
