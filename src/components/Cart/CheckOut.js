const CheckOut = ({ item }) => {
  const totalPrice = item.reduce((total, element) => {
    return element.price * element.quantity + total;
  }, 0);

  return (
    <>
      <h5 className="card-text">Total price: {totalPrice}€</h5>
      <button type="button" className="btn btn-color">
        Checkout
      </button>
    </>
  );
};

export default CheckOut;
