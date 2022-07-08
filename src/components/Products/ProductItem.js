import ProductAdd from "./ProductAdd";

const ProductItem = ({
  title,
  url,
  price,
  setItem,
  item,
  product,
  setAlertShow,
}) => {
  return (
    <div className="porduct-item">
      <div className="card p-0">
        <img src={url} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">{price} €</h6>
          <p className="card-text">
            The world's largest athletic apparel company, Nike is best known for
            its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon
            Sports.
          </p>
          <ProductAdd
            setItem={setItem}
            item={item}
            product={product}
            setAlertShow={setAlertShow}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
