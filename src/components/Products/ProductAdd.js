const ProductAdd = ({ setItem, item, product }) => {
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
