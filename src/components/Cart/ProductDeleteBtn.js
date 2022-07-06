import React from "react";

const ProductDeleteBtn = ({ id, item, setItem }) => {
  const deleteItem = () => {
    const deleteItem = item.filter((element) => {
      if (element.id !== id) {
        return element;
      }
    });
    setItem(deleteItem);
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

export default ProductDeleteBtn;
