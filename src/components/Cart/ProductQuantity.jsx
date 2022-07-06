const ProductQuantity = ({ item, quantity, setItem, id }) => {
  const add = () => {
    let items = [...item];
    items.forEach((element) => {
      if (element.id === id) {
        element.quantity = element.quantity + 1;
      }
    });
    setItem(items);
  };
  const substract = () => {
    if (quantity > 1) {
      let items = [...item];
      items.forEach((element) => {
        if (element.id === id) {
          element.quantity = element.quantity - 1;
        }
      });
      setItem(items);
    }
  };
  return (
    <div className="product-quantity">
      <input
        type="number"
        className="form-control  form-control-sm
        w-25"
        min="1"
        value={quantity}
        readOnly
      />
      <div className="quantity__btn-container">
        <div className="quantity__btn-item">
          <button onClick={substract} className="quantity__btn">
            <span className="quantity__btn-span">➖</span>
          </button>
        </div>
        <div className="quantity__btn-item">
          <button onClick={add} className="quantity__btn">
            <span className="quantity__btn-span">➕</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
