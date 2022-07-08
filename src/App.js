import Products from "./components/Products/Products";
import ShoppingCart from "./components/Cart/ShoppingCart";
import products from "./resources/products.json";
import slide from "./resources/slide.json";
import { useEffect, useState } from "react";
import "./css/index.css";
import Carousel from "./components/Carousel/Carousel";
import Alert from "./components/Alert/Alert";
const App = () => {
  const [item, setItem] = useState([]);
  const [alertShow, setAlertShow] = useState("");
  useEffect(() => {
    if (item.length > 0) localStorage.setItem("items", JSON.stringify(item));
  }, [item]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) ?? [];
    setItem(items);
  }, []);

  return (
    <>
      <Carousel slide={slide} />
      <div className="product-content">
        <ShoppingCart
          setItem={setItem}
          item={item}
          setAlertShow={setAlertShow}
        />
        <Products
          products={products}
          setItem={setItem}
          item={item}
          setAlertShow={setAlertShow}
        />
      </div>
      <Alert alertShow={alertShow} setAlertShow={setAlertShow} />
    </>
  );
};

export default App;
