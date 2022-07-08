const ProductAdd = ({ setItem, item, product, setAlertShow }) => {
  const addItem = () => {
    let existProduct = false;
    item.forEach((element) => {
      if (element.id === product.id) {
        existProduct = true;
      }
    });
    if (!existProduct) {
      product.quantity = 1;
      let newProduct = [...item, product];
      setItem(newProduct);
      setAlertShow("add");
    } else {
      setAlertShow("duplicated");
    }
  };
  return (
    <div>
      <button className="btn btn-color" onClick={addItem}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductAdd;
