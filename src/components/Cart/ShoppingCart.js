import Cart from "./Cart";
import CheckOut from "./CheckOut";

const ShoppingCart = ({ item, setItem }) => {
  return (
    <div>
      {/* Button trigger modal  */}
      <button
        type="button"
        className="shopping-cart"
        data-bs-toggle="modal"
        data-bs-target="#shoppingCart"
      >
        🛒
      </button>
      <div
        className="modal fade"
        id="shoppingCart"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shopping cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Cart item={item} setItem={setItem} />
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <CheckOut item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
