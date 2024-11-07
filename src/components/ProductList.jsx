import { addToCart } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productSlice";
import { useEffect } from "react";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <h3>Loading Products</h3>
      ) : (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.title}</h2>
            <p>$: {product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add To Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
