import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const products = [
    { id: 1, name: "product1", price: 10 },
    { id: 2, name: "product2", price: 17 },
  ];
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>$: {product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
