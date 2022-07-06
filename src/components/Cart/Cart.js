import ProductCart from "./ProductCart";

const Cart = ({ item, setItem }) => {
  return (
    <div>
      {item.map((element) => {
        return (
          <ProductCart
            title={element.title}
            price={element.price}
            url={element.url}
            key={element.id}
            id={element.id}
            setItem={setItem}
            item={item}
            quantity={element.quantity}
          />
        );
      })}
      {/*DO A MAP FUNCTION*/}
    </div>
  );
};

export default Cart;
