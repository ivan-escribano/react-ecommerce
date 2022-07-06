import Products from "./components/Products/Products";
import ShoppingCart from "./components/Cart/ShoppingCart";
import products from "./products.json";
import { useState } from "react";
import "./css/index.css";
const App = () => {
  const [item, setItem] = useState([]);
  return (
    <>
      <ShoppingCart setItem={setItem} item={item} />
      <Products products={products} setItem={setItem} item={item} />
    </>
  );
};

export default App;
