import Products from "./components/Products/Products";
import ShoppingCart from "./components/Cart/ShoppingCart";
import products from "./products.json";
import { useEffect, useState } from "react";
import "./css/index.css";
const App = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    if (item.length > 0) localStorage.setItem("items", JSON.stringify(item));
  }, [item]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) ?? [];
    setItem(items);
  }, []);

  return (
    <>
      <ShoppingCart setItem={setItem} item={item} />
      <Products products={products} setItem={setItem} item={item} />
    </>
  );
};

export default App;
