import ProductQuantity from "./ProductQuantity";
import ProductDeleteBtn from "./ProductDeleteBtn";

const ProductCart = ({ title, price, url, id, setItem, item, quantity }) => {
  return (
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={url} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price} €</p>
            <div className="card-text d-inline-flex ">
              <ProductQuantity
                item={item}
                quantity={quantity}
                setItem={setItem}
                id={id}
              />
              <ProductDeleteBtn id={id} item={item} setItem={setItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
