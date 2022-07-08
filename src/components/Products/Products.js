import ProductItem from "./ProductItem";

const Products = ({ products, setItem, item, setAlertShow }) => {
  return (
    <div className="p-5">
      <h1>PRODUCTS</h1>
      <div className="products row row-cols-4 g-4 m-0 ">
        {products.map((product) => {
          return (
            <ProductItem
              title={product.title}
              url={product.url}
              price={product.price}
              key={product.id}
              setItem={setItem}
              item={item}
              product={product}
              setAlertShow={setAlertShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
